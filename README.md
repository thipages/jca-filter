# JCA-FILTER

# Installation


- via npm : _npm i jca-filter_

```javascript
import jca_filter from 'js-filter';
// then
jca_filter(logic,otherConditions={});

```
- via HTML
```html
<script src="min.js"></script>
<script>
    // then
    jca_filter(logic,otherConditions={});
</script>
```
## Usage

```javascript
const conditions=jca_filter(
    "('field1,eq,val1' OR 'field2,eq,val2') AND 'field3,eq,val3'",
    {order:'filed1'}
);
/**
 * conditions content
 * 
 * {
 *   filter: ["field1,eq,val1","field3,eq,val3"],
 *   filter1: ["field2,eq,val2","field3,eq,val3"],
 *   order: "field1"
 * }
 * 
*/
```