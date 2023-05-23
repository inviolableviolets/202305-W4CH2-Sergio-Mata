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
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <label htmlFor="last-name"></label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            placeholder="Last Name"
            required
          />
        </div>
        <div>
          <label htmlFor="birth-date">Birth date: </label>
          <input
            type="date"
            name="birth-date"
            id="birth-date"
            placeholder="Birth Date"
            required
          />
        </div>
        <div>
          <label htmlFor="gender"></label>
          <select
            name="gender
          "
            id="gender"
            required
          >
            <option selected disabled>
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="venezuelan">Venezuelan</option>
          </select>
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-Mail"
            required
          />
        </div>
        <div>
          <label htmlFor="newsletter">
            Are you interested in our newsletter?
          </label>
          <input type="checkbox" name="checkbox" id="checkbox" />
        </div>
        <button type="submit">Next</button>
      </form>
    </>
  );
}
