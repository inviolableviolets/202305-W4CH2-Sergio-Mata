import { SyntheticEvent } from "react";

export default function AccessForm() {
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
        <div>
          <label htmlFor="repeat-password"></label>
          <input
            type="password"
            name="repeat-password"
            id="repeat-password"
            placeholder="Repeat Password"
            required
          />
        </div>
        <div>
          <label htmlFor="account"></label>
          <select
            name="acount
          "
            id="acount"
            required
          >
            <option selected disabled>
              Acount type
            </option>
            <option value="personal">Personal</option>
            <option value="business">Business</option>
            <option value="pro">Pro</option>
            <option value="venezuelan">Venezuelan</option>
          </select>
        </div>
        <div className="controls">
          <button type="button">Previous</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </>
  );
}
