const IngredientList = (props) => {
  return (
    <>
        <ul>
            {props.availableIngredients.map((ing, index) =>{
            return (
                <>
                    <li key={index} style={{backgroundColor: ing.color}}>{ing.name}
                        <button onClick={() => (props.addToBurger(ing))}>+</button>
                    </li>
                </>
            )
        }
        )}
        </ul>
    </>
  )
}

export default IngredientList;