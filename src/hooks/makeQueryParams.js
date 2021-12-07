// from https://stackoverflow.com/a/111545
export function makeQueryParams(params){
  let ret = [];
  for(let i in params){
    ret.push(`${encodeURIComponent(i)}=${params[i]}`)
  }

  return ret.join('&');
}