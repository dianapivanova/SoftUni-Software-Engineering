function fromJSONToHTMLTable(json) {
    let students = JSON.parse(json);

    let result = ['<table>'];
    result.push(addKey(students));
    students.forEach((student) => {
        result.push(addValue(student));
    });
    result.push('</table>');

    return (result.join('\n'));

    function addKey(arr) {
        let result = '  <tr>';

        Object.keys(arr[0]).forEach((key) => {
            result += `<th>${escapeString(key)}</th>`;
        });
        result += '</tr>';

        return result;
    }

    function addValue(obj) {
        let result = '  <tr>';
        Object.values(obj).forEach((value) => {
            result += `<td>${escapeString(value)}</td>`;
        });
        result += '</tr>';

        return result;
    }

    function escapeString(key) {
        let entityMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            ' ': '&nbsp;',
        };
        return key.toString().replace(/[&<> "]/g, (key) => entityMap[key]);
    }
}
fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
)