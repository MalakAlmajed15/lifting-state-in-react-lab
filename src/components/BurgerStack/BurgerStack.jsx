const BurgerStack = ({stack,removeFromBurger}) => {
    return (
        <>
        <ul>
            {stack.map((ing, index) =>{
            return (
                <>
                    <li key={index} style={{backgroundColor: ing.color}}>{ing.name}
                        <button onClick={() => removeFromBurger(index)}>-</button>
                    </li>
                </>
            )
        }
        )}
        </ul>
        </>
    )
}

export default BurgerStack;