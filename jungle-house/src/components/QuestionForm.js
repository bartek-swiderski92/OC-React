import { useState } from 'react';

// function handleSubmit(e) {
//     e.preventDefault();
//     alert(e.target['my_input'].value)
// }

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Ask your question here')
    return (
        // <form onSubmit={handleSubmit}>
        //     <input type="text" name='my_input' defaultValue='Type your text' />
        //     <button type='submit'>Enter</button>
        // </form>
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alert Me!</button>
        </div>
    )
}

export default QuestionForm