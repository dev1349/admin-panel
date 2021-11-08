import React from 'react'
import LabeledTextField from '../../../molecules/inputs/labeledTextField/LabeledTextField'
import LabeledNumberField from '../../../molecules/inputs/labeledNumberField/LabeledNumberField'
import Form from '../../../atoms/form/Form'

const AddEditAttributeGroup = ({ fields }) => {
    return (
        <Form>
            <LabeledTextField
                key={fields[0].id}
                id={fields[0].id}
                label={fields[0].label}
                name={fields[0].name}
                value={fields[0].value === null ? '' : fields[0].value}
                onChange={fields[0].onChange}
                autoFocus={true}
            />
            <LabeledTextField
                key={fields[1].id}
                id={fields[1].id}
                label={fields[1].label}
                name={fields[1].name}
                value={fields[1].value === null ? '' : fields[1].value}
                onChange={fields[1].onChange}
            />
            <LabeledNumberField
                key={fields[2].id}
                id={fields[2].id}
                label={fields[2].label}
                name={fields[2].name}
                pattern={fields[2].pattern}
                value={fields[2].value === null ? '' : fields[2].value}
                onChange={fields[2].onChange}
            />
        </Form>
    )
}

export default AddEditAttributeGroup
