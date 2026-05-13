import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactMessageSchema } from '@spe/schemas';
import useSWRMutation from 'swr/mutation';

// Función simulada para SWR Mutation
async function sendContactMessage(url, { arg }) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
  });
  if (!res.ok) throw new Error('Error al enviar mensaje');
  return res.json();
}

export const ContactForm = () => {
  const { trigger, isMutating } = useSWRMutation('/api/contact', sendContactMessage);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ContactMessageSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit = async (data) => {
    try {
      await trigger(data);
      alert('Mensaje enviado con éxito');
      reset();
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto p-4 border rounded"
    >
      <div>
        <label className="block text-sm font-medium">Nombre</label>
        <input {...register('name')} className="mt-1 block w-full border rounded p-2 text-black" />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          {...register('email')}
          className="mt-1 block w-full border rounded p-2 text-black"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Mensaje</label>
        <textarea
          {...register('message')}
          className="mt-1 block w-full border rounded p-2 text-black"
          rows="4"
        ></textarea>
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isMutating}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {isMutating ? 'Enviando...' : 'Enviar Mensaje'}
      </button>
    </form>
  );
};
