# bzplugins项目创建
### 1. 安装
``` 
npm install bzplugins
```
### 2. 使用

```
import {deepCopy} from "bzplugins"
```

### 3. 示例

```
let obj = {
  a: 13,
  b: 14
}

let obj2 = deepCopy(obj)
obj2.a = 23

obj // {a: 13, b: 14}
obj2 // {a: 23, b: 14}
```

### 4. 方法名集合

```
formatMsgTime(params) //params 时间戳
formatTime(params) //params 时间戳
deepCopy(params) //params object或者array
```

### 5. 说明

bzplugins这款插件最大的用处是，把许多我们在项目开发中常用到的方法进行集合，以便于提升开发效率！
