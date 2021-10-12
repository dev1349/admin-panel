import React from 'react'
import './EditGood.sass'

export const EditGood = () => (
    <form>
        <div>
            <label>
                Наименование: <span style={{ color: 'red' }}>*</span>
            </label>
            <input placeholder="Наименование: " />
        </div>
        <div>
            <label>Описание: </label>
            <div>
                <input
                    type="button"
                    onClick={() => document.execCommand('italic', false, null)}
                    title="Italicize Highlighted Text"
                    value={'I'}
                />

                <input
                    type="button"
                    onClick={() => document.execCommand('bold', false, null)}
                    title="Bold Highlighted Text"
                    value="B"
                />

                <input
                    type="button"
                    onClick={() =>
                        document.execCommand('underline', false, null)
                    }
                    value="U"
                    title="Underline Highlighted Text"
                />

                <div
                    className="input-text"
                    contentEditable="true"
                    onInput={e =>
                        console.log(
                            'Text inside div',
                            e.currentTarget.textContent
                        )
                    }
                    suppressContentEditableWarning={true}
                >
                    Input text
                </div>
            </div>
        </div>
        <div>
            <label>HTML-тег Title: </label>
            <input placeholder={'HTML-тег Title'} />
        </div>
        <div>
            <label>HTML-тег H1: </label>
            <input placeholder={'HTML-тег H1'} />
        </div>
        <div>
            <label>Мета тег Description: </label>
            <input placeholder={'Мета тег Description:'} />
        </div>
        <div>
            <label>Мета тег Keywords: </label>
            <input placeholder={'Мета тег Keywords:'} />
        </div>
        <input type="button" defaultValue="Save" />
    </form>
)
