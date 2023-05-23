import { SyntheticEvent } from "react";

export default function Form() {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    console.log(form);
  };

  return (
    <>
      <form action="#" aria-label="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" placeholder="Título"></label>
          <input type="text" name="title" id="title" required />
        </div>
        <div>
          <label htmlFor="owner" placeholder="Responable"></label>
          <input type="text" name="owner" id="owner" />
        </div>
        <button type="submit">Añadir</button>
      </form>
    </>
  );
}
