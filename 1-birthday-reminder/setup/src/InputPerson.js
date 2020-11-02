import React from "react";

const InputPerson = () => {
    return (
        <form className="new-person" onSubmit={handleClick}>
        <div className="person">
        <div className="profile-picture">{name.charAt(0)}</div>
        <div>
        <h4><input
          type="text"
          className="newName"
          placeholder="Name S."
          value={name}
          onChange={(e) => setName(e.target.value)}
        /></h4>
        <p><input
          type="text"
          className="newYear"
          placeholder="yyyy-mm-dd"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        /></p>
        </div>
        </div>
        <button>New person</button>
      </form>
    )
}

export default InputPerson;