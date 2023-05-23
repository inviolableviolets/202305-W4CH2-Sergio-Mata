export default function PersonalForm() {
  return (
    <>
      <form action="#" aria-label="form">
        <div>
          <label htmlFor="first-name"></label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="First Name"
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
          <fieldset>
            <legend>Select your gender</legend>
            <input type="radio" id="male" name="options" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="options" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" id="other" name="options" value="other" />
            <label htmlFor="other">Other</label>
            <input
              type="radio"
              id="venezuelan"
              name="options"
              value="venezuelan"
            />
            <label htmlFor="venezuelan">Venezuelan</label>
          </fieldset>
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
            Are you interested in our newsletter?{" "}
          </label>
          <input type="checkbox" name="checkbox" id="checkbox" />
        </div>
        <div className="controls">
          <button type="submit">Next</button>
        </div>
      </form>
    </>
  );
}
