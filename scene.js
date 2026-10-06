
(()=>{'use strict';
const host=document.getElementById('three-stage'),status=document.getElementById('scene-status'),reset=document.getElementById('scene-reset'),motion=document.querySelector('.motion-toggle');let renderer;
function unavailable(){host.classList.add('scene-unavailable');status.textContent='3D rendering is unavailable in this browser. All portfolio content remains accessible.';reset.hidden=true}
if(!window.THREE){unavailable();return}
try{renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'high-performance'})}catch(e){unavailable();return}
const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(38,1,.1,100);camera.position.set(0,1.1,8);renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.3;host.prepend(renderer.domElement);renderer.domElement.setAttribute('aria-hidden','true');host.classList.add('scene-ready');
scene.add(new THREE.HemisphereLight(0xf0ffe2,0x161d2b,2.5));const key=new THREE.DirectionalLight(0xe6ffd0,4);key.position.set(4,6,5);scene.add(key);const rim=new THREE.DirectionalLight(0x82acff,3);rim.position.set(-5,2,-3);scene.add(rim);const fill=new THREE.PointLight(0xffffff,30,20);fill.position.set(0,-1,4);scene.add(fill);
const sculpture=new THREE.Group();scene.add(sculpture);
const alloy=new THREE.MeshStandardMaterial({color:0xb9cbb0,metalness:.65,roughness:.28}),dark=new THREE.MeshStandardMaterial({color:0x28372b,metalness:.55,roughness:.32}),glow=new THREE.MeshStandardMaterial({color:0xd2e6a5,emissive:0x789247,emissiveIntensity:.35,metalness:.3,roughness:.22});
const knot=new THREE.Mesh(new THREE.TorusKnotGeometry(1.1,.3,160,24,2,3),alloy);sculpture.add(knot);
const core=new THREE.Mesh(new THREE.IcosahedronGeometry(.54,1),glow);sculpture.add(core);
for(let i=0;i<3;i++){const ring=new THREE.Mesh(new THREE.TorusGeometry(2.1+i*.17,.014,8,100),i===1?glow:dark);ring.rotation.set(Math.PI/2+i*.33,i*.6,.35+i*.4);sculpture.add(ring)}
const plinth=new THREE.Mesh(new THREE.CylinderGeometry(1.55,1.8,.28,64),dark);plinth.position.y=-2.1;scene.add(plinth);const base=new THREE.Mesh(new THREE.CylinderGeometry(2.1,2.2,.1,64),alloy);base.position.y=-2.3;scene.add(base);
const satellites=new THREE.Group();scene.add(satellites);for(let i=0;i<7;i++){const m=new THREE.Mesh(new THREE.BoxGeometry(.13,.13,.13),i%2?glow:alloy);const a=i/7*Math.PI*2;m.position.set(Math.cos(a)*2.6,Math.sin(a)*1.9,Math.sin(a*2));m.rotation.set(a,a,.4);satellites.add(m)}
const reduced=matchMedia('(prefers-reduced-motion:reduce)');let drag=false,lastX=0,lastY=0,userX=.15,userY=.4,time=0,raf=0,lastTime=0,scrollProgress=0;
function paused(){return reduced.matches||document.body.classList.contains('motion-off')}
function render(){sculpture.rotation.set(userX+Math.sin(time*.35)*.06,userY+time*.13,0);core.rotation.y=-time*.4;satellites.rotation.y=-time*.08;camera.position.z=8-scrollProgress*.8;camera.position.x=Math.sin(scrollProgress*Math.PI)*.7;camera.lookAt(0,-.15,0);renderer.render(scene,camera)}
function loop(now){raf=0;if(document.hidden)return;if(now-lastTime>32){if(!paused())time+=.033;render();lastTime=now}if(!paused())raf=requestAnimationFrame(loop)}
function start(){if(raf)cancelAnimationFrame(raf);raf=0;render();if(!paused()&&!document.hidden)raf=requestAnimationFrame(loop)}
function resize(){const r=host.getBoundingClientRect();renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;camera.updateProjectionMatrix();render()}
host.addEventListener('pointerdown',e=>{if(e.target.closest('button')||paused())return;drag=true;lastX=e.clientX;lastY=e.clientY;host.setPointerCapture(e.pointerId)});
host.addEventListener('pointermove',e=>{if(!drag)return;userY+=(e.clientX-lastX)*.009;userX=Math.max(-.8,Math.min(.8,userX+(e.clientY-lastY)*.006));lastX=e.clientX;lastY=e.clientY;render()});
function end(){drag=false}host.addEventListener('pointerup',end);host.addEventListener('pointercancel',end);
host.addEventListener('keydown',e=>{if(paused())return;if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();if(e.key==='ArrowLeft')userY-=.15;if(e.key==='ArrowRight')userY+=.15;if(e.key==='ArrowUp')userX-=.1;if(e.key==='ArrowDown')userX+=.1;render()}});
reset.addEventListener('click',()=>{userX=.15;userY=.4;time=0;render()});
addEventListener('scroll',()=>{scrollProgress=scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight);if(!paused())render()},{passive:true});addEventListener('resize',resize);document.addEventListener('visibilitychange',start);reduced.addEventListener('change',start);motion.addEventListener('click',()=>{status.textContent=paused()?'Motion paused.':'Drag to rotate · Arrow keys supported';start()});renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();cancelAnimationFrame(raf);unavailable()});
status.textContent=paused()?'Motion paused.':'Drag to rotate · Arrow keys supported';resize();start();
})();
