var p1=[2,0],p2=[0,-2],k,c;
//y=kx+c
k=(p1[1]-p2[1])/(p1[0]-p2[0]);
console.log("k:"+k);

c= p1[1]-k*p1[0];
console.log("c:"+c);
/*p2[1]=k*p2[0]+c;
var evl1=p1[1]-p2[1];
var evl2=k*p1[0]-k*p2[0]; */
