var darkwasp=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=64)}([,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(17),i=r(20),o=r(6),s=function(){function e(e){e&&(this.id=e),this.waspService=new n.WaspService}return e.prototype.getType=function(){return"wasps"},e.prototype.getId=function(){return this.id},e.prototype.isPure=function(){return this.waspService.getProperty(this.id,"pure").then(function(e){return null===e||e})},e.prototype.setPure=function(e){return"boolean"==typeof e?this.waspService.setProperty(this.id,"pure",e):Promise.reject("Boolean expected")},e.prototype.setParams=function(e){e&&Array.isArray(e)&&(this.params=e)},e.prototype.getParams=function(){return this.params},e.prototype.setTimeout=function(e){return"number"==typeof e&&e>1e3?this.waspService.setProperty(this.id,"duration",e):Promise.reject("Number expected")},e.prototype.getTimeout=function(){return this.waspService.getProperty(this.id,"duration").then(function(e){return null===e?o.env.timeout:e})},e.prototype.setName=function(e){var t=this;return"string"==typeof e?this.waspService.setProperty(this.id,"name",e).then(function(e){return e.id&&(t.id=e.id),e.value}):Promise.reject("String with the name expected")},e.prototype.getName=function(){return this.waspService.getProperty(this.id,"name")},e.prototype.list=function(){return this.waspService.getSwarms(this.id)},e.prototype.join=function(e){return"string"==typeof e?this.waspService.addProperty(this.id,"swarms",e,i.Part.name):Promise.reject("String with the swarm name expected")},e.prototype.leave=function(e){return"string"==typeof e?this.waspService.delProperty(this.id,"swarms",e,i.Part.name):Promise.reject("String with the swarm name expected")},e.prototype.set=function(e){return"function"==typeof e?this.waspService.setProperty(this.id,"content",e.toString()):Promise.reject("Function expected")},e.prototype.get=function(){return this.waspService.getProperty(this.id,"content")},e.prototype.remove=function(){return this.waspService.remove(this.id)},e}();t.WaspAgent=s},,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(15),i=r(2),o=r(20),s=function(){function e(e){e&&(this.id=e),this.peerService=new n.PeerService}return e.prototype.getType=function(){return"peers"},e.prototype.getId=function(){return this.id},e.prototype.getCores=function(){return this.peerService.askInfo(this.id,"cores")},e.prototype.getDevices=function(){return this.peerService.askInfo(this.id,"devices")},e.prototype.setUID=function(e){var t=this;return"string"==typeof e?this.peerService.setProperty(this.id,"uid",e).then(function(e){return e.id&&(t.id=e.id),e.value}):Promise.reject("String expected")},e.prototype.list=function(){return this.peerService.getSwarms(this.id)},e.prototype.join=function(e,t){return"string"!=typeof e||t&&"string"!=typeof t?Promise.reject("String expected"):this.peerService.addProperty(this.id,"swarms",e,o.Part.name)},e.prototype.leave=function(e){return"string"==typeof e?this.peerService.delProperty(this.id,"swarms",e,o.Part.name):Promise.reject("String expected")},e.prototype.run=function(e){var t=this;if(e instanceof i.WaspAgent||e instanceof Promise)return this.peerService.run(e,this.id);if("function"==typeof e){var r={body:e.toString(),params:[]};return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return r.params=e,t.peerService.run(r,t.id)}}return Promise.reject("Wasp or function expected")},e.prototype.isOwner=function(){return this.peerService.getProperty(this.id,"owner").then(function(e){return null!==e&&e})},e.prototype.isActive=function(){return this.peerService.askInfo(this.id,"active")},e.prototype.remove=function(){return this.peerService.remove(this.id)},e}();t.PeerAgent=s},function(e,t,r){t.env=r(10)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(18),i=r(5),o=r(2),s=function(){function e(e){e&&(this.id=e),this.swarmService=new n.SwarmService}return e.prototype.getType=function(){return"swarms"},e.prototype.getId=function(){return this.id},e.prototype.getCores=function(){return this.swarmService.askInfo(this.id,"cores")},e.prototype.getDevices=function(){return this.swarmService.askInfo(this.id,"devices")},e.prototype.setName=function(e){var t=this;return"string"==typeof e?this.swarmService.setProperty(this.id,"name",e).then(function(e){return e.id&&(t.id=e.id),e.value}):Promise.reject("String expected")},e.prototype.getName=function(){return this.swarmService.getProperty(this.id,"name")},e.prototype.addPeer=function(e){return e instanceof i.PeerAgent?this.swarmService.addProperty(this.id,"peers",e.getId()):Promise.reject("Peer expected")},e.prototype.removePeer=function(e){return e instanceof i.PeerAgent?this.swarmService.delProperty(this.id,"peers",e.getId()):Promise.reject("Peer expected")},e.prototype.hasPeer=function(e){return e instanceof i.PeerAgent?this.swarmService.hasProperty(this.id,"peers",e.getId()):Promise.reject("Peer expected")},e.prototype.getPeers=function(){return this.swarmService.getPeers(this.id)},e.prototype.addWasp=function(e){if(e instanceof o.WaspAgent)return this.swarmService.addProperty(this.id,"wasps",e.getId());Promise.reject("Wasp expected")},e.prototype.removeWasp=function(e){return e instanceof o.WaspAgent?this.swarmService.delProperty(this.id,"wasps",e.getId()):Promise.reject("Wasp expected")},e.prototype.hasWasp=function(e){return e instanceof o.WaspAgent?this.swarmService.hasProperty(this.id,"wasps",e.getId()):Promise.reject("Wasp expected")},e.prototype.getWasps=function(){return this.swarmService.getWasps(this.id)},e.prototype.addMaster=function(e){return e instanceof i.PeerAgent?this.swarmService.addProperty(this.id,"masters",e.getId()):Promise.reject("Peer expected")},e.prototype.removeMaster=function(e){return e instanceof i.PeerAgent?this.swarmService.delProperty(this.id,"masters",e.getId()):Promise.reject("Peer expected")},e.prototype.hasMaster=function(e){return e instanceof i.PeerAgent?this.swarmService.hasProperty(this.id,"masters",e.getId()):Promise.reject("Peer expected")},e.prototype.getMasters=function(){return this.swarmService.getMasters(this.id)},e.prototype.kick=function(e){return this.removePeer(e)},e.prototype.ban=function(e){var t=this;if(!(e instanceof i.PeerAgent))return Promise.reject("Peer expected");this.kick(e).then(function(){return t.swarmService.addProperty(t.id,"blacklist",e.getId())})},e.prototype.ignore=function(e){if(!(e instanceof i.PeerAgent))return Promise.reject("Peer expected")},e.prototype.getDescription=function(){return this.swarmService.getProperty(this.id,"description")},e.prototype.setDescription=function(e){return"string"==typeof e?this.swarmService.setProperty(this.id,"description",e):Promise.reject("String expected")},e.prototype.run=function(e){return e instanceof o.WaspAgent||e instanceof Promise?this.swarmService.run(e,this.id):Promise.reject("Wasp or promise expected")},e.prototype.lock=function(e){return"string"==typeof e?this.swarmService.setProperty(this.id,"key",e):Promise.reject("String expected")},e.prototype.listen=function(e){return"string"==typeof e&&~["join","leave","run"].indexOf(e)?this.swarmService.listen(this.id,e):Promise.reject("String expected")},e.prototype.remove=function(){return this.swarmService.remove(this.id)},e}();t.SwarmAgent=s},,,function(e,t){e.exports={ver:"v1",queen:"https://queen.darkwasp.com",nest:"https://nest.darkwasp.com/api/",static:"https://nest.darkwasp.com/static/",timeout:3e5,secure:!0,production:!0}},,,,,function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=r(16),s=r(19),a=r(7),u=function(e){function t(){var t=e.call(this)||this;return t.agent="peers",t}return i(t,e),t.prototype.getHost=function(){return o.SourceService.peer},t.prototype.getSwarms=function(e){var t=this;return this.getProperty(e,"swarms").then(function(e){return t.scatter(e,a.SwarmAgent)})},t.prototype.run=function(e,t){return this.sourceService.execute(e,t,"peers")},t}(s.AgentService);t.PeerService=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),i=r(2),o=function(){function e(){}return e.getSerial=function(){return"sn."+(Math.random()+10).toString(7)},e.prototype.setTarget=function(t,r,n){return e.send=n,e.gate=r,this.authPeer(t)},e.prototype.authPeer=function(t){return this.request(t,"auth").then(function(r){var i=new n.PeerAgent(r.id);return e.peer=i,e.app=t.app,i})},e.prototype.execute=function(e,t,r){var n=this;return e instanceof Promise?e.then(function(e){return n.makeOrder(e,t,r)}):this.makeOrder(e,t,r)},e.prototype.inform=function(t){return t.subject===e.peer.getId()&&(t.local=!0),this.request(t,"info")},e.prototype.setTask=function(e){return this.request(e,"task")},e.prototype.setWatch=function(e){return this.request(e,"watch")},e.prototype.setQuery=function(e){return this.request(e,"query")},e.prototype.makeOrder=function(t,r,n){var o=this,s=e.peer,a={data:{},subject:r,agent:n};return t instanceof i.WaspAgent?(a.data={id:t.getId(),params:t.getParams()},r===s.getId()?Promise.all([t.isPure(),t.getTimeout()]).then(function(t){return a.local=!0,a.app=e.app,a.data.pure=t[0],a.timeout=t[1],o.request(a,"order")}):this.request(a,"order")):t.body?(a.data={body:t.body,params:t.params},this.request(a,"order")):Promise.reject("Incorrect order")},e.prototype.request=function(t,r){return t.type=r,t.sn=e.getSerial(),new Promise(function(r,n){var i=function(o){var s;o.sn?s=o:o.data&&(s=o.data),s&&s.sn===t.sn&&(s.error?n(s.error):s.data.hasOwnProperty("value")?s.created?r({value:s.data.value,id:s.subject}):r(s.data.value):n("Wrong request"),e.gate.removeEventListener?e.gate.removeEventListener("message",i):e.gate.removeListener("message",i))};e.send(t),e.gate.addEventListener?e.gate.addEventListener("message",i):e.gate.on("message",i)})},e}();t.SourceService=o},function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=r(7),s=function(e){function t(){var t=e.call(this)||this;return t.agent="wasps",t}return i(t,e),t.prototype.getSwarms=function(e){var t=this;return this.getProperty(e,"swarms").then(function(e){return t.scatter(e,o.SwarmAgent)})},t}(r(19).AgentService);t.WaspService=s},function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=r(5),s=r(2),a=function(e){function t(){var t=e.call(this)||this;return t.agent="swarms",t}return i(t,e),t.prototype.getPeers=function(e){var t=this;return this.getProperty(e,"peers").then(function(e){return t.scatter(e,o.PeerAgent)})},t.prototype.getMasters=function(e){var t=this;return this.getProperty(e,"masters").then(function(e){return t.scatter(e,o.PeerAgent)})},t.prototype.getWasps=function(e){var t=this;return this.getProperty(e,"wasps").then(function(e){return t.scatter(e,s.WaspAgent)})},t.prototype.run=function(e,t){return this.sourceService.execute(e,t,"swarms")},t.prototype.listen=function(e,t){return this.sourceService.setWatch({subject:e,action:t}).then(function(e){return!!e.action})},t}(r(19).AgentService);t.SwarmService=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(20),i=r(16),o=r(34),s=function(){function e(e){void 0===e&&(e=new i.SourceService),this.sourceService=e}return e.prototype.findAll=function(){return this.sourceService.setQuery({agent:this.agent,action:o.Actions.all,data:{attribute:"id"}})},e.prototype.findByAgent=function(e,t,r){return void 0===r&&(r=n.Part.name),this.sourceService.setQuery({agent:this.agent,action:o.Actions.get,data:{attribute:e,value:t,part:r}})},e.prototype.findOneBy=function(e,t,r){return void 0===r&&(r=n.Part.name),this.sourceService.setQuery({agent:this.agent,action:o.Actions.one,data:{attribute:e,value:t,part:r}})},e.prototype.remove=function(e,t){return e?this.sourceService.setQuery({agent:t||this.agent,action:o.Actions.del,data:{attribute:"id",value:e}}):this.isNotActivated()},e.prototype.addProperty=function(e,t,r,i){return void 0===i&&(i=n.Part.id),e?this.sourceService.setTask({agent:this.agent,subject:e,predicate:n.Predicate.add,data:{attribute:t,part:i,value:r}}):this.isNotActivated()},e.prototype.delProperty=function(e,t,r,i){return void 0===i&&(i=n.Part.id),e?this.sourceService.setTask({agent:this.agent,subject:e,predicate:n.Predicate.exc,data:{attribute:t,part:i,value:r}}):this.isNotActivated()},e.prototype.hasProperty=function(e,t,r,i){return void 0===i&&(i=n.Part.id),e?this.sourceService.setTask({agent:this.agent,subject:e,predicate:n.Predicate.has,data:{attribute:t,part:i,value:r}}):this.isNotActivated()},e.prototype.setProperty=function(e,t,r){return e||~["name","uid"].indexOf(t)?this.sourceService.setTask({agent:this.agent,subject:e,predicate:n.Predicate.set,data:{attribute:t,value:r}}):this.isNotActivated()},e.prototype.getProperty=function(e,t){return e?this.sourceService.setTask({agent:this.agent,subject:e,predicate:n.Predicate.get,data:{attribute:t}}):this.isNotActivated()},e.prototype.askInfo=function(e,t){return e?this.sourceService.inform({agent:this.agent,subject:e,data:{property:t}}):this.isNotActivated()},e.prototype.scatter=function(e,t){return e&&Array.isArray(e)?e.map(function(e){return new t(e)}):null},e.prototype.isNotActivated=function(){return Promise.reject("Agent is not activated. Set the name/uid before adding properties.")},e}();t.AgentService=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.add=0]="add",e[e.exc=1]="exc",e[e.set=2]="set",e[e.get=3]="get",e[e.has=4]="has"}(t.Predicate||(t.Predicate={})),function(e){e[e.name=0]="name",e[e.id=1]="id"}(t.Part||(t.Part={}))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(17),i=r(2),o=function(){function e(){}return e.prototype.wasp=function(){if("undefined"!=typeof Proxy){var e=new n.WaspService;return new Proxy(Object,{get:function(t,r){var n=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.findOneBy("name",r).then(function(e){if(e){var r=new i.WaspAgent(e);return r.setParams(t),r}return null})};return n.set=function(t){return r&&"function"==typeof t?e.findOneBy("name",r).then(function(e){var n=new i.WaspAgent(e);return e?n.set(t):n.setName(r).then(function(){return n.set(t)})}):Promise.reject("Function expected")},n}})}},e}();t.WaspProxy=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(34),i=function(){function e(){}return e.prototype.getAll=function(){var e=this;return this.service.findAll().then(function(t){return t?t.map(function(t){return t?new e.agent(t):null}):null})},e.prototype.getByName=function(e){var t=this;return this.service.findOneBy("name",e).then(function(e){return e?new t.agent(e):null})},e.prototype.getById=function(e){var t=this;return this.service.findOneBy("id",e,n.Part.id).then(function(e){return e?new t.agent(e):null})},e.prototype.create=function(){return Promise.resolve(new this.agent)},e.prototype.removeById=function(e){return this.service.remove(e,this.agent.name)},e}();t.AgentRepository=i},,,,,,,,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.all=0]="all",e[e.get=1]="get",e[e.one=2]="one",e[e.del=3]="del"}(t.Actions||(t.Actions={})),function(e){e[e.name=0]="name",e[e.id=1]="id"}(t.Part||(t.Part={}))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(65),i=r(6),o=r(16),s=r(2);t.Wasp=s.WaspAgent;var a=r(5);t.Peer=a.PeerAgent;var u={data:void 0,app:void 0,peer:void 0};t.connect=function(e,t){return e.hasOwnProperty("app")&&e.hasOwnProperty("peer")?!u.data||u.app===e.app&&u.peer===e.peer?(u.app===e.app&&u.peer===e.peer||(u.data=new Promise(function(e,t){var r=document.createElement("iframe");r.setAttribute("src",i.env.static+"colony."+i.env.ver+".html"),r.setAttribute("type","text/html"),r.setAttribute("name","dark-wasp"),r.setAttribute("style","display: none;"),r.onload=function(){var n;r.contentWindow?n=r.contentWindow:self.frames&&self.frames["dark-wasp"]&&(n=self.frames["dark-wasp"]),n?e(n):t("Can't create an isolated context")},r.onerror=function(e){t(e)},document.body.appendChild(r)}).then(function(t){return(new o.SourceService).setTarget(e,self,function(e){return t.postMessage(e,"*")})}).then(function(e){var r=new n.Main;return r.initApp(e),void 0!==self.Proxy&&r.initProxies(),"slim"!==t&&r.initRepos(),r}),u.app=e.app,u.peer=e.peer),u.data):Promise.reject("Peer was authenticated with another app already"):Promise.reject("No app or peer keys passed")}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),i=r(21),o=r(66),s=r(7),a=r(67),u=r(68),c=r(69),p=r(2),f=r(70),d=function(){function e(){}return e.prototype.initApp=function(e){this.peer=e},e.prototype.initProxies=function(){var e=new i.WaspProxy,t=new o.SwarmProxy,r=new f.PeerProxy;this.peer=r.peer(),this.wasp=e.wasp(),this.swarm=t.swarm()},e.prototype.initRepos=function(){this.peers=new u.PeerRepository,this.swarms=new c.SwarmRepository,this.wasps=new a.WaspRepository,this.Wasp=p.WaspAgent,this.Swarm=s.SwarmAgent,this.Peer=n.PeerAgent},e}();t.Main=d},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(18),i=r(7),o=r(21),s=function(){function e(){}return e.prototype.swarm=function(){if("undefined"!=typeof Proxy){var e=new n.SwarmService;return new Proxy(Object,{get:function(t,r){return new Proxy(Object,{get:function(t,n){return function(){for(var t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];return e.findOneBy("name",r).then(function(e){var r=new i.SwarmAgent(e);if("function"==typeof r[n])return r[n](t);if(e){var s=(new o.WaspProxy).wasp();return r.run(s[n].apply(s,t))}return Promise.reject("Swarm not found")})}}})}})}},e}();t.SwarmProxy=s},function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=r(17),s=r(2),a=function(e){function t(t,r){void 0===t&&(t=new o.WaspService),void 0===r&&(r=s.WaspAgent);var n=e.call(this)||this;return n.service=t,n.agent=r,n}return i(t,e),t.prototype.getBySwarm=function(e){return this.service.findByAgent("swarms",e).then(function(e){return e?e.map(function(e){if(e)return new s.WaspAgent(e)}):null})},t}(r(22).AgentRepository);t.WaspRepository=a},function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=r(15),s=r(5),a=function(e){function t(t,r){void 0===t&&(t=new o.PeerService),void 0===r&&(r=s.PeerAgent);var n=e.call(this)||this;return n.service=t,n.agent=r,n}return i(t,e),t.prototype.getBySwarm=function(e){return this.service.findByAgent("swarms",e).then(function(e){return e?e.map(function(e){if(e)return new s.PeerAgent(e)}):null})},t}(r(22).AgentRepository);t.PeerRepository=a},function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=r(18),s=r(7),a=function(e){function t(t,r){void 0===t&&(t=new o.SwarmService),void 0===r&&(r=s.SwarmAgent);var n=e.call(this)||this;return n.service=t,n.agent=r,n}return i(t,e),t.prototype.getByPeer=function(e){return this.service.findByAgent("peers",e).then(function(e){return e?e.map(function(e){if(e)return new s.SwarmAgent(e)}):null})},t}(r(22).AgentRepository);t.SwarmRepository=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(21),i=r(15),o=function(){function e(){}return e.prototype.peer=function(){if("undefined"!=typeof Proxy){var e=(new i.PeerService).getHost();return new Proxy(Object,{get:function(t,r){return function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];if("function"==typeof e[r])return e[r].apply(e,t);var o=(new n.WaspProxy).wasp();return e.run(o[r].apply(o,t))}}})}},e}();t.PeerProxy=o}]);