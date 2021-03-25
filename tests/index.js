//const logic='("A" OR "A1" AND "B") OR ("C" AND "D" OR "E")';
import jcaFilter from "./../esm/index.js";
const expected=[
    '{"filter":["A"],"filter1":["A1","B"],"filter2":["C","D"],"filter3":["E"]}'
]
const logics=[
    [
        "('A' OR 'A1' AND 'B') OR ('C' AND 'D' OR 'E')",
        expected[0],
        "Nested expression with simple quote"
    ],    [
        '("A" OR "A1" AND "B") OR ("C" AND "D" OR "E")',
        expected[0],
        "Nested expression with double quote"
    ]
    //"'A' OR 'A1' AND 'B') OR ('C' AND 'D' OR 'E'"; // todo : breaks code
];
const getDetails=(parameters)=>{
    return `
        <details>
        <summary>more</summary>
        ${Object.entries(parameters).map(([k,v])=>`<div><span style="font-weight:bold">${k}</span> : <span>${v}</span></div>`).join('')}
        </details>
    `;
};
logics.forEach(
    v=>{
        let observed=JSON.stringify(jcaFilter(v[0]));
        let ok=observed===v[1]?'OK':'NOK';
        let details={observed,expected:v[1]};
        document.body.insertAdjacentHTML('beforeend',`<div>${ok} : ${v[2]}${getDetails(details)} </div>`);
    }
);

let forReadme=jcaFilter(
    "('field1,eq,val1' OR 'field2,eq,val2') AND 'field3,eq,val3'",
    {order:'field1'}
);
console.log(forReadme);
