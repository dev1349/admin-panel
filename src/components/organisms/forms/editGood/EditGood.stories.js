import React from 'react'
import EditGood from './EditGood'

export default {
    title: 'organisms/forms/EditGood',
    component: EditGood,
}

const Template = args => <EditGood {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    name: {
        id: 'goodName',
        label: 'Наименование*',
        name: 'name',
        value: 'Наименование товара',
        onChange: payload => console.log('change', payload),
        autoFocus: true,
    },
    description: {
        id: 'goodDescription',
        label: 'Описание',
        name: 'description',
        value: 'Описание товара',
        onChange: payload => console.log('change', payload),
    },
    htmlTitle: {
        id: 'goodHtmlTitle',
        label: 'HTML-тег title',
        name: 'htmlTitle',
        value: 'HTML-тег title',
        onChange: payload => console.log('change', payload),
    },
    htmlH1: {
        id: 'goodHtmlH1',
        label: 'HTML-тег h1',
        name: 'htmlH1',
        value: 'HTML-тег h1',
        onChange: payload => console.log('change', payload),
    },
    metaDescription: {
        id: 'goodMetaDescription',
        label: 'Мета тег description',
        name: 'metaDescription',
        value: 'Мета тег description',
        onChange: payload => console.log('change', payload),
    },
    metaKeywords: {
        id: 'goodMetaKeywords',
        label: 'Мета тег description',
        name: 'metaKeywords',
        value: 'Мета тег description',
        onChange: payload => console.log('change', payload),
    },
    saveGood: () => console.log('saveGood'),
    isSaveButtonDisabled: true,
}
