import { SyntheticEvent } from "react";

export default function PersonalForm() {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    console.log(form);
  };

  return (
    <>
      <form action="#" aria-label="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username"></label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="controls">
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
}
