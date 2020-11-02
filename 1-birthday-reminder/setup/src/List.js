import React from "react";
import DateFunction from "./DateFunction";
import AgeFunction from "./AgeFunction";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
          const { id, name, year } = person;
          const pDate = DateFunction(year)
          return (
            <article key={id} className="person">
              <div className="profile-picture">{name.charAt(0)}</div>
              <div>
                <h4>{name}</h4>
                <p>{AgeFunction(year)} years</p>
                <p>
                  {pDate.day === 1 || pDate.day === 21 || pDate.day === 21
                    ? pDate.day + "st"
                    : pDate.day === 2 || pDate.day === 22
                    ? pDate.day + "nd"
                    : pDate.day + "th"}{" "}
                  {pDate.month}
                </p>
              </div>
            </article>
          );
        })}
    </>
  );
};

export default List;
