from fastapi import FastAPI, BackgroundTasks, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import time
import asyncio
import concurrent.futures

app = FastAPI(title="SPE Python Engine")

# CORS middleware for local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Process pool for heavy CPU-bound tasks
process_pool = concurrent.futures.ProcessPoolExecutor(max_workers=4)

def heavy_computation(data: dict):
    """
    Simulates a heavy CPU-bound computation.
    In real usage, this might be data analysis, machine learning, etc.
    """
    time.sleep(5) # Simulating 5 seconds of work
    return {"status": "success", "result": f"Processed {data}"}

# 1. Background Tasks approach (Fire and forget, or Job ID polling later)
def background_heavy_task(task_id: str, data: dict):
    print(f"Starting background task {task_id}")
    result = heavy_computation(data)
    print(f"Finished background task {task_id}: {result}")
    # Here you would typically save the result to a DB or send a Webhook back to Node.js

@app.post("/engine/tasks/background")
async def create_background_task(data: dict, background_tasks: BackgroundTasks):
    task_id = f"task_{int(time.time())}"
    background_tasks.add_task(background_heavy_task, task_id, data)
    return {"message": "Task received and processing in background", "task_id": task_id}


# 2. ProcessPoolExecutor approach (Wait for result, but don't block the async event loop)
@app.post("/engine/tasks/await")
async def create_awaited_task(data: dict):
    try:
        loop = asyncio.get_running_loop()
        # This will wait for the result but WON'T block other FastAPI requests
        result = await loop.run_in_executor(process_pool, heavy_computation, data)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/engine/health")
async def health_check():
    return {"status": "ok"}
