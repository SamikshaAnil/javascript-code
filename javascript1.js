// input arr =[ apple,orange,grapes]a\
// output result ={ a : [apple], o:[orange], g:[grapes]}
const arr = [ 'apple','orange','grapes']
const res ={}
arr.forEach(ele =>{
    if(ele in res){
        res[ele[0]].push(ele)
    }else{
        res[ele[0]] = [ele]
    }
})
console.log(res)
