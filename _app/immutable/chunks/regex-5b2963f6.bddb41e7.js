var t=[{match:/^(?!\/).*/gm,sub:"todo"},{type:"num",match:/\[((?!\])[^\\]|\\.)*\]/g},{type:"kwd",match:/\||\^|\$|\\.|\w+($|\r|\n)/g},{type:"var",match:/\*|\+|\{\d+,\d+\}/g}],a="oper";export{t as default,a as type};
