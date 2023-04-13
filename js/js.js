function desencriptar(m){
    let po, pc, v2 = 1, lpc = 0, v = 1, i = 0, at, ap, f = "";
    while(v2==1){
   while(v==1){
    if(m.charAt(i) == "("){
        po = i;
    }
    if(m.charAt(i) == ")"){
        pc = i;
        v = 0;
    }
    if(i == m.length){
        v = 0
    }

    i += 1;
  }
  if(po>lpc){
  at = m.slice(lpc, po);
  ap = m.slice(po+1, pc).split('').reverse().join('');
  }
  else {
  at = m.slice(lpc);
  ap = "";
  v2 = 0;
  }
  lpc = pc+1;
  f += at + ap;
  v = 1;
}

return f;
}