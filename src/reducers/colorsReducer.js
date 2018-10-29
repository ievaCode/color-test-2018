// import {CHANGE_COLOR} from '../actions/all-types';


const initialState = [
    {
        name: 'maroon',
        code: '#800b0e',
        desc: 'The maroon color is often used to represent intense and passionate things like; confidence, creative thoughts, excitement, power, risk, passion, love, ambition, courage, strength, warmth, and beauty.'
    },
    {
        name: 'red',
        code: '#d01d0f',
        desc: 'Being the longest wavelength, red is a powerful colour. Although not technically the most visible, it has the property of appearing to be nearer than it is and therefore it grabs our attention first. Its effect is physical - it stimulates us and raises the pulse rate. Red can also be perceived as demanding and aggressive.'
    },
    {
        name: 'pink',
        code: '#f473aa',
        desc: 'Being a tint of red, pink also affects us physically, but it soothes, rather than stimulates. Pink is a powerful colour, psychologically. It represents the feminine principle, and survival of the species; it is nurturing and physically soothing. Too much pink is physically draining and can be somewhat emasculating.'
    },
    {
        name: 'violet',
        code: '#8b51a6',
        desc: 'The shortest wavelength is violet, often described as purple. It takes awareness to a higher level of thought, even into the realms of spiritual values. It is highly introvertive and encourages deep contemplation, or meditation. It has associations with royalty and usually communicates the finest possible quality.'
    },
    {
        name: 'blue',
        code: '#2f4ea5',
        desc: 'Blue is the colour of the mind and is essentially soothing; it affects us mentally, rather than the physical reaction we have to red. Strong blues will stimulate clear thought and lighter, soft blues will calm the mind and aid concentration. It is the colour of clear communication. Blue can also be perceived as cold, unemotional and unfriendly.'
    },
    {
        name: 'turquoise',
        code: '#3e92a1',
        desc: 'Turquoise is a shade of blue that lies on the scale between blue and green. It has characteristics associated with both of these, such as the calmness of blue and the growth that is represented in green. Turquoise can also has the energy that yellow transmits, becoming an uplifting color. '
    },
    {
        name: 'green',
        code: '#90c040',
        desc: 'Being in the centre of the spectrum, green is the colour of balance - a more important concept than many people realise. When the world about us contains plenty of green, this indicates the presence of water, and little danger of famine, so we are reassured by green, on a primitive level. Negatively, it can indicate stagnation.'
    },
    {
        name: 'yellow',
        code: '#e2ce06',
        desc: 'Yellow is stimulating. In this case the stimulus is emotional, therefore yellow is the strongest colour, psychologically. The right yellow will lift our spirits and our self-esteem; it is the colour of confidence and optimism. Too much of it can cause self-esteem to plummet, giving rise to fear and anxiety. '
    },
    {
        name: 'orange',
        code: '#d3871b',
        desc: 'Since it is a combination of red and yellow, orange is stimulating and reaction to it is a combination of the physical and the emotional. It focuses our minds on issues of physical comfort - food, warmth, shelter etc. - and sensuality. Negatively, it might focus on the exact opposite - deprivation, especially when combined with black.'
    },
    {
        name: 'brown',
        code: '#61360a',
        desc: 'Brown usually consists of red and yellow, with a large percentage of black. Consequently, it has much of the same seriousness as black, but is warmer and softer. It has elements of the red and yellow properties. Brown has associations with the earth and the natural world. It is a solid, reliable colour.'
    },
    {
        name: 'black',
        code: '#000000',
        desc: 'Black creates protective barriers, as it absorbs all the energy coming towards you, and it enshrouds the personality. Positively, it communicates absolute clarity, with no fine nuances. It communicates sophistication and uncompromising excellence and it works particularly well with white. Black creates a perception of weight and seriousness.'
    }
    ];

export default (state = initialState, action) => {
    return state
};



// export default (state = initialState, action) => {
//     switch (action.type) {
//         case ACTIVE_COLOR :
//             console.log(action);
//             return ;
//
//         default :
//             return state
//     }
// }

