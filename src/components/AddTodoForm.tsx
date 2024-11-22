import { useState } from "react";

interface AddTodoFormProps{
  onSubmit: (title: string) => void;
}
function AddTodoForm({onSubmit}: AddTodoFormProps) {
  const [input, setInput] = useState("")
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if(!input.trim()) return;
    onSubmit(input)
    setInput("");
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="What needs to be done?" className="rounded-s-md border-4 grow border-gray-800 p-2" />
      <button type="submit" className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800">Add</button>
    </form>
  )
}

export default AddTodoForm;