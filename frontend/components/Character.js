import React, { useCallback, useState } from 'react'

function Character(props) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [showHomeWorld, setShowHomeWorld] = useState(false);

  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleShowHomeWorld = useCallback(() => setShowHomeWorld(!showHomeWorld), [showHomeWorld]);

  return (
    <div>
      {/* Use the same markup with the same attributes as in the mock */}
        <div className="character-card" onClick={toggleShowHomeWorld}>
          <h3 className="character-name">{props.name}</h3>
          {showHomeWorld && <p>Planet: <span className="character-planet">{props.homeworld.name}</span></p>}
        </div>
    </div>
  )
}

export default Character
