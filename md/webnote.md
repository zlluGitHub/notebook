****\*\*\*\*****\*\*\*\*****\*\*\*\***** 2018.8.11 （数组常用方法）******\*\*\*\*******\*******\*\*\*\*******
filter
find
findIndex
map 映射
reduce

npm i -g create-react-app 　//环境搭建
创建 react 工作文件夹

ubuntu 中修改用户名后 sudo 无法解析主机
https://blog.csdn.net/xuehuafeiwu123/article/details/72896748?locationNum=2&fps=1
****\*\*\*\*****\*\*\*\*****\*\*\*\***** 2018.8.10 （ES6 语法）******\*\*\*\*******\*\*\*******\*\*\*\*******

let 与　 var 的区别
let 不能重复声明　不能声明提升　 let 声明的变量｛｝为一个作用域
const 用来声明常量　不能被修改
　 let 变量的数组结构赋值 let [q,w,e]=[1,2,3 ]　结构不成功，结果为 undefind
　 let 变量的对象结构赋值 let {q,w,e}={q:'test1',2:'test2',3:'test' }

    对象合并方法：　Object.assign(aldobject,newobject) $.extend()　｛...obj１，...obj２｝
    复制新的对象：Object.assign(｛｝,newobject)　或｛...obj｝扩展运算符

****\*\*\*\*****\*\*\*\*****\*\*\*\***** 2018.8.10 （Lunix）******\*\*\*\*******\*\*\*\*******\*\*\*\*******

### 如何将本地做好的项目推送到 git

- 网上新建一个空仓库(仓库名最好和本地文件夹重名)
- 本地文件夹初始化为 git 仓库
  ```
  git init
  ```
- 接下来就是用 git 常用三部操作推送代码

- 首次推送代码的时候，本地不知道推送到远端哪个仓库 需要使用 以下命令

  ```
  git remote add origin <仓库地址>
  git push -u origin master
  ```

### git pull 使用

当远端的版本优先于本地的版本，而本地又做了新的版本要提交的时候，会提示提交失败。建议使用 `git pull` 拉取远端的更新。但是拉取的时候会有两种情况

- 远端更新和本地更新不冲突，此时 `git pull` 的时候，会弹出 nano 编辑界面，提示用户合并两个不冲突的更新并提交版本留言，使用 `ctrl + x`，选择 Y 同意，然后直接回车，即可离开 nano 编辑界面。执行完毕之后会生成一个新的版本，即合并远端和本地更新的版本，此时在执行 `git push` 远端和本地就同步了。
- 远端更新和本地冲突（修改的是同一文件的相同位置），此时也需要 `git pull` 拉去远端更新,但是提示拉取失败，需要用户手动处理冲突，处理之后相当于修改了文件，所有直接使用 `git add . git commit -m'' git push` 即可提交成功。

### git 分支操作

- 查看本地分支

```
git branch
```

- 创建新分支  
  -a 参数 查看所有分支(本地和远端)
  -r 参数 查看远端分支

```
git branch [分支名]
```

- 切换分支

```
git checkout [分支名]
```

**创建新的分支之后，分支内默认和 master 分支内的内容相同。想要将本地创建好的分支同步到远端，直接执行 `git push -u origin [分支名]` 即可，以后想要更新 `gh-pages` 分支，直接按照原来的 git 三步即可。**

`gh-pages` 分支比较特殊，该分支上的内容可以使用 `github账户名.github.io/仓库名` 地址访问

- 合并其他分支上的更新

```
git merge [分支名]
```

**拉取更新之后，直接使用 `git push` 就可以同步更新到远端。**

- 拉取主分支上的更新

```
git pull origin master
```

### git 实现历史回滚

```
git reset --hard [版本号]
```

**回滚之后想要直接同步到远端，由于远端的版本优先于本地，所以直接 `git push` 失败。使用 `git push -f` 强制推送到远端。想要回滚之后在回到原来的版本，版本号找不到了，我们使用 `git reflog` 命令，可查看所有版本的修改，就可以看到所有的版本号了。**

### node 的安装与使用

#### 安装

- linux 系统
  使用 `sudo apt-get install curl` ，
  再使用 `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash` 安装 nvm，
  然后后就可以使用 nvm 安装 node 了。

```
nvm install v10.8.0
```

**linux 系统上安装好 node 之后关闭了命令行 node 命令就找不到了，这是因为 node 没有被添加到系统环境变量内所以需要执行以下命令，将 node 添加到系统的环境变量中**

```
cd ~/.nvm/versions/node/v8.11.1/bin
pwd
```

拿到 `/home/sunny-zz/.nvm/versions/node/v8.11.1/bin`
添加这行到 `.bashrc` 的最后，(在用户主目录下 `code .bashrc` 就可以在 vscode 中打开 .bashrc 文件)
`export PATH="$PATH:/home/zzt/.nvm/versions/node/v9.2.0/bin"`
然后保存，重启命令行

- windows 系统直接到 node 官网下载最新安装包安装即可

### node 的模块

- node 模块分类:核心模块 第三方模块 自定义模块
- node 模块导入导出，使用 require('模块名') 导入核心模块和第三方模块。自定义模块需要使用 module.exports 导出，require('路径') 导入。
  **node 模块自带作用域，不会污染全局环境，js 文件之间可以相互引用，减少 html 文件的 js 引入。**

### npm 的简单使用

`npm init 或 ｉ` 初始化文件夹为 npm 项目
`npm install [包名]` npm 的安装命令 -g 参数将包安装到全局下(在任何位置都可以使用这个包) --save-dev(-D) 参数安装非必需项目依赖
`npm unstall [包名]` npm 卸载包
`npm i` 依据 package.json 的记录，下载全部的项目依赖。
`npm update [包名]` 更新项目依赖

### webpack 的简单使用

**由于我们使用了 npm 管理我们的项目，所以 js 就变成了模块，但是模块的导入导出的方法浏览器不支持，所以需要编译。webpack 就可以实现。**

- 在 npm 项目中安装 webpack 工具

```
npm install webpack webpack-cli --save-dev
```

- 新建 dist 文件夹，将项目的 index.html 放在里面。index.html 内引入 main.js 文件。
- 新建 src 文件夹，将 index.js 放在里面。
- 然后执行 `npx webpack` 命令。浏览器打开 index.html 发现原本 index.js 内不支持的语法现在成功执行了

**这`npx webpack`命令，是将项目下的 src 内的 index.js 文件打包到 dist 文件夹下的 main.js。打包过程会对 js 进行编译(将浏览器不能识别的模块倒入导出编译成浏览器识别的语法)，并对 index.js 导入的模块进行打捆全部写入到 main.js 内。这样 index.html 直接引入 main.js 就可以看到 index.js 所写内容了**

****\*\*\*\*****\*\*\*\*****\*\*\*\***** 2018.8.9 （Lunix）******\*\*\*\*******\*\*\*\*******\*\*\*\*******
/home/qqqqqq/.nvm/versions/node/v10.8.0/bin
yarn 类似ｎｐｍ
serve 　服务器
mongodb 数据库

https://www.mongodb.com/ 数据库

- 下载　 git

  1. 在 linux 下直接使用命令：sudo apt-get install git
  2. windows 下百度 gitbash ，下载安装即可。
  3. mac 下: brew install git

  配置个人的用户名称和电子邮件地址：
  git config --global user.name "Sunny-zz"
  git config --global user.email "977527479@qq.com"
  可以查看已有的配置信息

git config --list

- Lunix 使用 nvm 　安装　 node:
  1. 首先安装 curl: sudo apt-get install curl
  2. 再安装 nvm :curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
  3. 安装 node
     查看有哪些版本可以安装: nvm ls-remote
     安装版本 v5.10.1: nvm install v5.10.1
     这样就安装好了 node ，同时 npm 页就装好了。执行下面的命令来检查下本地的 node ，npm 版本吧。
     node -v
     npm -v

* git 生成 ssh 密钥
  首先，检查下自己之前有没有已经生成：
  在开始菜单中打开 git 下的 git bash（当然，在其他目录下打开 git bash 也是一样的）：
  然后执行：
  qqqqqq@qqqqqq-PC:~/Desktop$ cd ~/.ssh
  进入:
  qqqqqq@qqqqqq-PC:~/.ssh$

  如果能进入到.ssh 文件目录下 ，则证明，之前生成过.ssh 秘钥，可以直接使用里面的秘钥。
  如果不能进入到.ssh 文件目录下，则：
  检测下自己之前有没有配置：git config user.name 和 git config user.email（直接分别输入这两个命令）

  一、如果之前没有配置过 1.配置
  git config –global user.name ‘xxxxx’
  git config –global user.email ‘xxx@xx.xxx’

        2.生成秘钥
            ssh-keygen -t rsa -C ‘上面的邮箱’(或 ssh-keygen)
            cat .gitconfig //查看是否有email和name
            cd .ssh
            ls 查看是否有id_rsa  id_rsa.pub
            最后在.ssh目录下得到了两个文件：id_rsa（私有秘钥）和id_rsa.pub（公有密钥）
            cat in_rsaa.pub

* 文件管理
  touch [文件名]
  mkdir [文件夹名]
  rm [文件名]
  rm -r [空文件夹名]
  rm -rf [强制删除文件夹]
  mv [旧文件夹/文件名][新文件夹/文件名]　移动或重命名
  cp [旧文件夹/文件名][新文件夹/文件名]　复制
  ls 查看本文件夹下所有文件或文件夹

* git 提交命令
  git pull
  git add . (.或\*或-A)表示全部
  git commit -m'注释信息'
  git push //提交修改
* 仓库信息查询
  git init 初始化仓库　－ｙ全部默认ｙｅｓ
  git log 查看提交记录
  git status 查看仓库信息
* git 分支操作
  git branch [分支名称]　 gh-pages 分支特殊　（[用户名].github.io/[仓库名]/）　新建分支
  git chechout [分支名称]　切换分支
  git merge [需要合并的分支]

* 修改 Linux 命令行　终端　用户名方法
  在根目录打开文件　.bashrc 找到
  ～～～
  PS1 = '${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
  ～～～
  修改\u 和\h 即可

****\*\*\*\*****\*\*\*\*****\*\*\*\***** 2018.8.8 （vscode 常用插件）******\*\*\*\*******\*\*\*\*******\*\*\*\*******

vscode 插件地址： https://blog.csdn.net/shunfa888/article/details/79606277

- vscode 前端常用插件推荐，搭建 JQuery、Vue 等开发环境
  advanced-new-file
  Auto Close Tag
  Auto Rename Tag
  Chinese (Simplified) Language Pack for Visual Studio Code
  Debugger for Chrome
  ESLint
  HTML CSS Support
  HTML Snippets
  IntelliSense for CSS class names in HTML
  JavaScript (ES6) code snippets
  jQuery Code Snippets
  JS-CSS-HTML Formatter
  Linux Themes for VS Code
  Markdown Preview Enhanced
  markdownlint
  open in browser
  Path Intellisense
  Prettier - Code formatter
  Reactjs code snippets
  Sublime Text Keymap and Settings Importer
  Vetur
  vscode-icons

****\*\*\*\*****\*\*\*\*****\*\*\*\***** 2018.8.1 ******\*\*\*\*******\*\*\*\*******\*\*\*\*******

- 原生阻止事件冒泡
  ie 8 以下使用 window.event 获取事件对象 但是其他浏览器也可以使用 window.event 获取
  eve = event || window.event
  ie 阻止事件冒泡 event.cancelBubble = true;
  非 ie 阻止事件冒泡 stopPropagation()

  if (event) {
  // 非 ie
  event.stopPropagation()
  } else {
  // ie
  window.event.cancelBubble = true
  }
  // ie 阻止事件冒泡 event.cancelBubble = true
  // 非 ie event.stopPropagation()
  console.log('box1')

****\*\*\*\*****\*\*\*\*****\*\*\*\***** 2018.7.31 ******\*\*\*\*******\*\*\*\*******\*\*\*\*******

- input 样式 复选框样式

```
    .box {
      position: relative;
      padding-left: 30px;
    }

    .box input[type=checkbox] {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }



    .test::before {
      left: 0;
      content: '';
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 4px;
      background-color: #ccc;
      top: 0;
    }

    .test::after {
      top: 0;
      left: 0;
      content: '';
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }

    .box input:checked+.test::before {
      background-color: #00b3d4;
    }

    .box input:checked+.test::after {
      background-image: url('./img/勾.png');
    }


    <div class="box">
        <input id='test' type="checkbox">
        <label for="test" class="test">测试按钮</label>
    </div>
```

- flex 布局
  1. 容器 display: flex 容器可以嵌套
  2. 容器的主轴线决定项目的排列顺序 默认轴线是横向的 可以使用 flex-direction 修改，这个样式是容器的样式
  3. 容器给了固定宽度项目不会超出容器，如果项目的总宽度产出和容器的总宽项目会自动缩小
  4. 项目 容器下的子级 不管子级是什么标签自动转化为块元素 如果项目没有设定副轴方向的宽度，默认和容器的宽度一致
  5. 注意 使用了 flex 布局 以下样式禁止使用 float:xxx; vertical-align:xx; clear:xxx;

****\*\*\*\*****\*\*\*\*****\*\*\*\***** 2018.7.26 ******\*\*\*\*******\*\*\*\*******\*\*\*\*******

- this 构造函数 指向问题

  this 关键字 事件中的 this 指的是绑定事件的原生 dom 元素
  函数内的 this 指的是调用这个函数的对象
  函数内的 this 调用的时候才会指向
  全局作用域下访问 this 指的是 window 仅限非严格模式下


    jQuery.fn.extend  给jQuery 构造函数的原型对象添加 共有的属性或方法
    这个方法中的 this 指向的是 实例化jquery对象
    jQuery.fn.extend({
      check: function () {
        this.each(function (index, input) {
          input.checked = true
        })
        return this
      }
    })

- 构造函数 （实例化对象）
  function CeratePeople(name,age){
  this.name = name;
  this.age = age;
  say = function(){
  console.log('my name is ' + this.name);
  }
  }
  var lucy = new CeratePeople('lucy',20); //构造函数内部的 this 指向的是实例化对象
  console.log(lucy);
  lucy.say();

- Object.keys(ob) //获取属性名组成的数组

- obj[arr[i]] //当对象属性名是变量的时候，我们想访问该属性值 使用 obj[属性名]

- js 的内置对象扩展库 lodash underscore

- 对象合并方法

  1. $.extend(默认对象, 新对象) //后边的覆盖前边的{jQuery}
  2. Object.assign(默认对象, 新对象) //后边的覆盖前边的

- 闭包 1.子级作用域一直会在父级作用域下 符合声明函数时的层级关系 2.在父级作用域内声明变量会一直存储在内存中

****\*\*\*\*****\*\*\*\*****\*\*\*\***** 2018.7.25 ******\*\*\*\*******\*\*\*\*******\*\*\*\*******

- Node 节点 （node）
  常用属性 1. element.id 设置或返回元素的 id。

        2.  element.innerHTML   设置或者返回元素的内容，可包含节点中的子标签以及内容

        3.  element.innerText  设置或者返回元素的内容，不包含节点中的子标签以及内容

        4.  element.className   设置或者 返回元素的类名

        5.  element.nodeName    返回该节点的大写字母标签名

            element.removeChild() 删除父节点的一个子节点。 参数 parent 或 thisNode

        6.  element.nodeType   返回该结点的节点类型，1表示元素节点  2表示属性节点……

        7.  element.nodeValue  返回该节点的value值，元素节点的该值为null

        8.  element.childNodes  返回元素的子节点的nodeslist对象，nodelist类似于数组

        ，有length属性，可以使用方括号 [index] 访问指定索引的值(也可以使用item

        (index)方法)。但nodelist并不是数组。

        9.  element.firstChild/element.lastChild  返回元素的第一个/最后一个子节点(包含

        注释节点和文本节点)

        10.  element.parentNode  返回该结点的父节点

        11.  element.previousSibling  返回与当前节点同级的上一个节点(包含注释节点和文本节点)

        12.  element.nextSibling   返回与当前节点同级的下一个节点(包含注释节点和文本节点)

        13.  element.childElementCount :  返回子元素(不包括文本节点以及注释节点)的个数

        14.  element.firstElementChild /lastElementChild 返回第一个/最后一个子元素(不

        包括文本节点以及注释节点)

        15.  element.previousElementSibling/nextElementSibling  返回前一个/后一个兄

        弟元素(不包括文本节点以及注释节点)

        16.  element.clientHeight/clientWidth  返回内容的可视高度/宽度（不包括边框，

        边距或滚动条）

        17.  element.offsetHeight/offsetWidth /offsetLeft/offsetTop 返回元素的高度/宽

        度/相对于父元素的左偏移/上偏移(包括边框和填充,不包括边距)

        18.  element.scrollHeight/scrollWidth/scrollLeft/scrollTop返回整个元素的高度（

        包括带滚动条的隐蔽的地方）/宽度/返回当前视图中的实际元素的左边缘和左边缘之

        间的距离/上边缘的距离

        19.  element.style  设置或返回元素的行内样式属性。

        element.style.backgroundColor  注意，与CSS不同，style的属性要去掉横杠，第

        二个单词首字母要大写

        20.  element.tagName  返回元素的标签名(大写)

* dom 常用方法 1. element.appendChild(nodeName) 向元素添加新的子节点，作为最后一个子

        节点，并返回该子节点。如需向 HTML DOM 添加新元素，您首先必须创建该元素

        ，然后把它追加到已有的元素上。


        2.  element.getAttribute(para)   返回元素节点的指定属性值。

        3.  element.getAttributeNode(para)   返回指定的属性节点。

        4.  element.getElementsByTagName(para) 返回拥有指定标签名的所有子元素的集

        合。

        5.  element.hasAttribute(para)  如果元素拥有指定属性，则返回true，否则返回 false。

        6.  element.insertBefore(insertNode,appointedNode)  在指定的已有的子节点之前插入新节点。

        js演示代码：
                var a=document.getElementById('first_form');
                var inputList=document.getElementsByTagName('input');
                var newNode=document.createElement('input');
                var newNode2=document.createTextNode('天马流星拳');
                var br=document.createElement('br');
                newNode.type='radio';
                newNode.name='gongfu';
                newNode.value='tmlxq';
                a.insertBefore(newNode,inputList[2]);
                a.insertBefore(newNode2,inputList[3]);
                a.insertBefore(br,inputList[3]);


        7.  element.removeAttribute() 从元素中移除指定属性。


        8.  element.removeChild()   从元素中移除子节点。

        9.  element.replaceChild(newNode,replaceNode)  把指定节点替换为新节点。

        10.  element.setAttribute(attrName,attrValue)  把指定属性设置或更改为指定值。

        11.  element.setAttributeNode()    修改指定属性节点

        12.  nodelist.item(0) 返回 NodeList 中位于指定下标的节点。
             nodelist[0]

- 浏览器对象

  1. alert()弹窗

  2. confirm('提示信息') //点击确认 返回 true 取消返回 false

  3. prompt() //点击确认 返回 输入的内容 取消返回 null

- window 对象

  - window.print() //打印当前页的内容

  - window.open('url',窗口的名字) //打开一个新的窗口 返回窗口对象

  - 浏览器对象.close() //关闭当前窗口

  - window.location //对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。

    1. location.hostname //返回 web 主机的域名

    2. location.pathname //返回当前页面的路径和文件名

    3. location.port 返回 //web 主机的端口 （80 或 443）

    4. location.protocol //返回所使用的 web 协议（http:// 或 https://）

    5. location.href //设置或返回完整的 URL。

    6. assign(路径) //产生历史记录 方法可加载一个新的文档。

    7. replace(路径) //不会产生历史记录 方法可用一个新文档取代当前文档。

  - window.history //对象包含浏览器的历史。

    1. history.back() //与在浏览器点击后退按钮相同

    2. history.forward() //与在浏览器中点击按钮向前相同

    3. history.length //历史纪录的个数

- 函数传参判断

        function add() {
            var sum = 0;
            for (var i = 0; i < arguments.length; i++) {
                swep = arguments[i] * 1;
                if (!isNaN(swep)) {
                    sum += swep;
                }
            }
            return sum;
        }
        var qw = add(1, 2, 3, 4, 'w', '1');
        console.log(qw);

****\*\*\*\*****\*\*\*\*****\*\*\*\***** 2018.7.24 ******\*\*\*\*******\*\*\*\*******\*\*\*\*******

- 事件委托
  ele.onclick = function(event){
  var target = event.target;
  if(target.innerText === '删除' && target.tagName === "BUTTON"){
  //事件处理
  }

  }

- 添加监听事件 复选框 （onblur onfocus onkeyup onkeypress onkeydown onmouseenter onmouseleave onmousemove onmousedown onmouseup onclick ondblclick onchange ）
  checkbox radio select ---------> 使用 onchange 事件

    <input type="radio" name="me">
    <input type="checkbox" >
    <input type="test">

  表单元素的 onchange 事件 指的是内容发生改变的时候触发
  ele.addEventListener('click',function(){ //事件处理 })

  a.jquery 做法 .prop('checked') 获取选中状态 .prop('checked',布尔值) 设置
  var state = $('#all').prop('checked')

- 原生 ajax
  发送 ajax 请求必须创建 XMLHttpRequest 对象
  var xml = new XMLHttpRequest()
  xml.open("POST", "http://localhost:3008/comments", true)
  xml.setRequestHeader('Content-Type', 'application/json');
  xml.send(JSON.stringify({body:'zzt'}))
  xml.onreadystatechange = function() {
  // 请求成功的标志 xml.readyState 状态 xml.status 状态码
  if (xml.readyState == 4 ) {
  // 状态为 4:请求已完成，且响应已就绪 状态码 200
  // xml.responseText 是成功之后返回的数据 是 json 字符串类型
  // 我们要使用 json 对象的 parse 方法转化为对象形式 JSON.parse(xml.responseText)
  // 对应的 json 对象的 stringify 方法 可以将对象转化为 json 字符串
  console.log(JSON.parse(xml.responseText))
  // console.log(JSON.stringify(JSON.parse(xml.responseText)))
  }
  }

- 数据 ajax 请求几种方式
  $.ajax() fetch axios 原生 ajax

- axios 数据请求
  axios.get('http://localhost:3008/comments')
  .then(function(res){ //成功后返回数据
  console.log(res.data)
  })
  .catch(function(err){//失败后返回数据
  console.log(err)
  })
  axios.post('http://localhost:3008/comments',{body:'123456'})
  .then(function(res){//成功后返回数据
  console.log(res.data)
  })
  .catch(function(err){//失败后返回数据
  console.log(err)
  })
  axios.delete('http://localhost:3008/comments/1')
  .then(function(res){//成功后返回数据
  console.log(res.data)
  })
  .catch(function(err){//失败后返回数据
  console.log(err)
  })
  axios.put('http://localhost:3008/comments/4',{body:'00000'})
  .then(function(res){//成功后返回数据
  console.log(res.data)
  })
  .catch(function(err){//失败后返回数据
  console.log(err)
  })

****\*\*\*\*****\*\*\*\*****\*\*\*\***** 2018.7.23 ******\*\*\*\*******\*\*\*\*******\*\*\*\*******

- 本地数据存储
  sessionStorage 存储信息 窗口关闭消失
  sessionStorage.removeItem('key') 删除谋一项数据
  sessionStorage.clear() 删除所有项数据

  localStorage 存储信息 一直存在
  localStorage.removeItem('key') 删除谋一项数据
  localStorage.clear() 删除所有项数据
  lolocalStorage.setItem('key','val') 添加谋一项数据
  lolocalStorage.getItem('key') 获取谋一项数据

****\*\*\*\*****\*\*\*\*****\*\*\*\***** 2018.7.18 ******\*\*\*\*******\*\*\*\*******\*\*\*\*******

- 服务器运行 数据模拟 json-server --watch db.json -p 3008

****\*\*\*\*****\*\*\*\*****\*\*\*\***** 2018.7.17 (原生 js) ******\*\*\*\*******\*\*\*\*******\*\*\*\*******

- 阻止 a 标签默认跳转

  1. event.preventDefault
  2. javascript:;
  3. javascript:void(0);

- 选择器
  document.getElementById('idName')
  document.getElementsByClassName('className')
  document.getElementsByTagName('tagName')
  document.querySelector('选择器');
  document.querySelectorAll('选择器')[index];

  setAttribute('属性名') //获取实行的值
  getAttribute('属性名','属性值') //设置属性
  ele.id //设置 id 名

* dom 元素的创建 添加 删除 清空 复制（克隆）
  document.createElement('标签名') //创建标签
  ele.appendChild("str") //向标签中添加元素
  ele.innerText = 'qw'; //向元素中添加文本内容
  ele.innerHTML = '<span>asdfasd</span>'; //值必须是字符串或数字
  ele.insertBefore(new,old) //在元素前面添加元素

******\*\*\*\*******\*\*\*******\*\*\*\******* 2018.7.16 ********\*\*********\*\*********\*\*********

- 字符串对象 （https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length）

  String.length 表示一个字符串的长度。

  concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。语法：str.concat(string2, string3[, ..., stringN])

  charAt() 方法从一个字符串中返回指定的字符。 语法：str.charAt(index) console.log(str.charAt(0))

  charCodeAt() 方法获取字符串中对应的某个字符的字符编码 返回 0 到 65535 之间的整数，表示给定索引处的 UTF-16 代码 语法：str.charCodeAt(index) console.log(str.charCodeAt(0))

  endsWith()方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。语法：str.endsWith(searchString [, position]);

  includes(str) indexOf(str) 是否包含,第一个结果为 true 或 false 第二个结果为位置或-1

  repeat() 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。语法：let resultString = str.repeat(count);

  search() 返回正确查找的开始位置 否则返回 -1

  语法：

  split()方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。语法：str.split([separator[, limit]])

  slice() 方法提取一个字符串的一部分，并返回一新的字符串。语法：str.slice(beginSlice[, endSlice])

  toUpperCase() 字符串转成大写 语法：console.log(str.toUpperCase())

  toLowerCase() 字符串转成小写 语法：console.log(str.toLowerCase())

  replace() 方法返回一个由替换值替换一些或所有匹配的模式后的新字符串。语法：str.replace(regexp|substr, newSubStr|function)

  trim() 去掉字符串左右的空白符 trimLeft() trimRight()

  match() 以数组的方式返回所有匹配值 检索匹配项 当一个字符串与一个正则表达式匹配时。 案例：str.match(regexp); var result = str.match(/[a-z]/g)

  检测某个字符串

      var regexp = new RegExp(classname) ;  //其中classname是变量

      var result = regexp.test(oldClass);   //其中oldClass也是变量

* 数字对象 （https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number）

  Number.MAX_VALUE 属性表示在 JavaScript 里所能表示的最大数值。

  Number.MIN_VALUE 属性表示在 JavaScript 中所能表示的最小的正值。

  Number.isNaN() 方法确定传递的值是否为 NaN 和其类型是 Number。它是原始的全局 isNaN()的更强大的版本。

  Number.parseFloat() 方法可以把一个字符串解析成浮点数。该方法与全局的 parseFloat() 函数相同，并且处于 ECMAScript 6
  规范中（用于全局变量的模块化）。

  Number.parseInt() 方法可以根据给定的进制数把一个字符串解析成整数。

  toFixed() 方法使用定点表示法来格式化一个数。 numObj.toFixed(digits)

  toString() 方法返回指定 Number 对象的字符串表示形式。

- 案例 (气温 温度)

  str '12 号，今天最高气温 23℃，最低气温-2℃'
  var re = /-?[0-9]{1,2}(?=℃)/g
  console.log(str.match(re))

- git 服务器启动命令：server . + 回车

- 服务器端口：server . -p 3008 + 回车

- 安装 json 服务器命令：npm i -g json-server

- dom 对象 （原生 js）获取元素 document 对象下的某些方法

  document.getElementById('id 名')

  document.getElementsByClassName('class 名') 获取的是一个类数组 可以通过中括号获取里面的元素 ie9

  document.getElementsByName('name 名') 获取的是一个类数组

  document.getElementsByTagName('标签名') 获取的是一个类数组

  document.querySelector('css 选择器') 选择匹配的第一个元素 ie8

  document.querySelectorAll('css 选择器') 获取的是一个类数组 ie8

  上述所有 document 都可替换成任意一个原生 dom 元素

  var btn = document.getElementById('btn')

  var btn = document.getElementsByClassName('btn')[0]

  原生绑定事件 只能是原生 dom 对象才能绑定

  dom 元素.style 获取该元素的行内样式对象 对该对象下的属性直接修改相当于给元素添加了行内样式

  原生对象.innerText 获取标签内部的文本

  事件中的 this 指的就是触发事件的元素

********\*\*********\*********\*\********* 2018.7.13 （day 日期 ）********\*\*********\*\*\*\*********\*\*********

- 日期格式化 ：http://momentjs.cn/

  cdn 引用地址：https://www.bootcdn.cn/moment.js/

  monent.js: <script src="https://cdn.bootcss.com/moment.js/2.22.1/locale/ar-dz.js" type="text/javascript" ></script>

  案例：
  日期格式化
  moment().format('MMMM Do YYYY, h:mm:ss a'); // 七月 13 日 2018, 3:22:52 下午
  moment().format('dddd'); // 星期五
  moment().format("MMM Do YY"); // 7 月 13 日 18
  moment().format('YYYY [escaped] YYYY'); // 2018 escaped 2018
  moment().format(); // 2018-07-13T15:22:52+08:00
  相对时间
  moment("20111031", "YYYYMMDD").fromNow(); // 7 年前
  moment("20120620", "YYYYMMDD").fromNow(); // 6 年前
  moment().startOf('day').fromNow(); // 15 小时前
  moment().endOf('day').fromNow(); // 9 小时内
  moment().startOf('hour').fromNow(); // 23 分钟前
  日历时间
  moment().subtract(10, 'days').calendar(); // 2018 年 7 月 3 日
  moment().subtract(6, 'days').calendar(); // 上周六下午 3 点 22
  moment().subtract(3, 'days').calendar(); // 本周二下午 3 点 22
  moment().subtract(1, 'days').calendar(); // 昨天下午 3 点 22 分
  moment().calendar(); // 今天下午 3 点 22 分
  moment().add(1, 'days').calendar(); // 明天下午 3 点 22 分
  moment().add(3, 'days').calendar(); // 下周一下午 3 点 22
  moment().add(10, 'days').calendar(); // 2018 年 7 月 23 日
  多语言支持
  moment().format('L'); // 2018-07-13
  moment().format('l'); // 2018-07-13
  moment().format('LL'); // 2018 年 7 月 13 日
  moment().format('ll'); // 2018 年 7 月 13 日
  moment().format('LLL'); // 2018 年 7 月 13 日下午 3 点 22 分
  moment().format('lll'); // 2018 年 7 月 13 日下午 3 点 22 分
  moment().format('LLLL'); // 2018 年 7 月 13 日星期五下午 3 点 22 分
  moment().format('llll'); // 2018 年 7 月 13 日星期五下午 3 点 22 分

        moment("20111031", "YYYYMMDD").fromNow(); // 7 年前
        moment("20120620", "YYYYMMDD").fromNow(); // 6 年前
        moment().startOf('day').fromNow();        // 15 小时前
        moment().endOf('day').fromNow();          // 9 小时内
        console.log(moment("01:00:00", "hh:mm:ss").startOf().fromNow())

- 内置对象 日期对象
  var date = new Date() 创建一个当前时间的日期对象
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var hao = date.getDate();
  var day = date.getDay(); 星期 0(周日)-6
  var hour = date.getHours();
  .getMinutes() 分钟;
  .getSeconds() 秒;
  .getMilliSeconds() 毫秒;

  将 get 换成 set 就是设置
  格林威治时间 1970.1.1 0:0:0 到现在的毫秒数
  当你需要一个永远不会重复的数时就使用 getTime

- JavaScript 获取当前时间戳

  第一种方法：var timestamp = Date.parse(new Date()); //获取的时间戳是把毫秒改成 000 显示，
  结果：1280977330000

  第二种方法：var timestamp = (new Date()).valueOf(); //获取了当前毫秒的时间戳。
  结果：1280977330748

  第三种方法：var timestamp=new Date().getTime(); //获取了当前毫秒的时间戳。
  结果：1280977330748

- 定时器
  计时器:是异步函数
  setInterval()反复执行某个函数 setTimeout()延迟执行
  clearInterval() clearTimeout()

- 倒计时

    <script type="text/javascript">
        var targetHoursTime = 21;
        var targetMinutesTime = 24;
        var targetSecondsTime = 59;
        var Time = setInterval(Timekeeping,1000);
        function  Timekeeping(){
            var date = new Date();
            var nowHoursTime = date.getHours();
            var nowMinutesTime = date.getMinutes();
            var nowSecondsTime = date.getSeconds();
            var getHoursTime = targetHoursTime - nowHoursTime;
            var getMinutesTime = targetMinutesTime - nowMinutesTime;
            var getSecondsTime = targetSecondsTime - nowSecondsTime;
            if (getHoursTime === 0 && getMinutesTime === -1 && getSecondsTime === 59) {
                $('div').html('时间到！');
                clearInterval(Time);
            };
            if(getHoursTime < 10){
                $('span:nth-child(1)').text(`${'0'+getHoursTime}`);
            }else{
                $('span:nth-child(1)').text(getHoursTime);
            };
            if(getMinutesTime < 10){
                $('span:nth-child(2)').text(`${'0'+getMinutesTime}`);
            }else{
                 $('span:nth-child(2)').text(getMinutesTime);
            };
            if(getSecondsTime < 10){
                $('span:nth-child(3)').text(`${'0'+getSecondsTime}`);
            }else{
                $('span:nth-child(3)').text(getSecondsTime);
            };
        };
    </script>

- 圆盘时钟

    <script>
    var num = 0;
    function time(){
      var date = new Date()
      var h = date.getHours()
      var m = date.getMinutes()
      var s = date.getSeconds()
      if(s===0){ //m每转一圈时均会从零开始，固加360
        num ++
      }
      $('.seconds').css('transform',`rotate(${s*6+num*360}deg)`)
      $('.minutes').css('transform',`rotate(${m*6}deg)`)
      $('.hours').css('transform',`rotate(${h*30+m*0.5}deg)`)
    }
    time()
    setInterval(time,1000)
  </script>

* regexp 正则表达式 RegExp 检测某个字符串或某个数字是否符合规则 这个规则就是正则表达式
  exec 检测字符串是否符合正则表达式的规则 想要的到 正确匹配的某段字符串的时候 使用 exec 方法，使用 exec 方法的得到的返回值[0]
  如何符合返回一个类数组(包含符合条件的某段字符串，这个字符串开始的位置，被检测的字符串，分组情况) 反之 null

  正则表达式后紧跟着关键字 i 正则表达式不区分大小写

  正则表达式后紧跟着关键字 g 正则表达式全局匹配

  字符串的 match 方法内的正则表达式如果加上关键字 g 的话，会全部匹配，将所有的正确匹配结果组成数组返回

* regexp 正则表达式 规则

  []代表一位 {}(只作用于前面一位数)个数

  [0-9] \d 一位数字 [a-z] 一位小写字母 [A-Z] 一位大写字母 [A-z] 一位字母或下划线

  \w 一位字母数字或下划线 \s 一位空白符

  ^ 开头 $ 结尾

  +(1 到多) \*(0 到多) ?(0 位或一位) (只作用于前面一位数)个数

  | 或 ()分组

  \ 转义符

  [^a] 非

  /^(.)\1{1,}$/ 匹配全部一样的字符 \数字 和低级个分组内的第一位完全一样


    var re = /^1(6|7)4$/

    console.log(re.exec('4qewekjhgjhg74'))

- 正则匹配手机号

      中国电信号段
      133、149、153、173、177、180、181、189、199

      中国联通号段
      130、131、132、145、155、156、166、171、175、176、185、186

      中国移动号段
      134(0-8)、135、136、137、138、139、147、150、151、152、157、158、159、178、182、183、184、187、188、198

      13  0123456789
      15  012345789
      16  6
      17  135678
      18  0123456789
      19  89

      var re = /^1(3[0-9]|5[012345789]|6[6]|7[135678]|8[0-9]|9[89])[0-9]{8}$/

********\*\*********\*********\*\*********2018.7.11 （Array 数组 md）********\*\*********\*\*\*\*********\*\*********

sunny-zz
Markdown
www.Markdown.cn
yuque.com
onclick

- jQuery cdn <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js" type="text/javascript" ></script>

- 数组元素去重

```
var array = [12,3,43,5,23,67,98,6,2,6,356,34,124,65,43,2,52];
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        if (arr.indexOf(array[i]) === -1) {
            arr.push(array[i]);
        };
    };
```

注意：indexOf 用来查找数组中是否含有指定元素 (不能用于查找对象)
find 或 indIndex 判断数组中是否包含指定对象

********\*\*********\*********\*\*********2018.7.11（Array 数组对象）********\*\*********\*\*\*\*********\*\*********

- sublime 所有弹窗使用 Esc 键关闭

- 数组的方法
  push() 想数组最后添加一项或多项 返回数组的长度
  pop() 删除数组的最后一项，返回被删除的数据

  unshift() 向数组前面添加一项或多项 并返回数组长度
  shift() 删除数组前的第一项，并返回被删除的数据

  concat() 用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
  join() 将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。

  indexOf() 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
  reverse() 将数组中元素的位置颠倒。第一个数组元素成为最后一个数组元素，最后一个数组元素成为第一个。

  slice() 返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
  splice() 通过删除现有元素和/或添加新元素来更改一个数组的内容。

  sort() 方法用就地（ in-place ）的算法对数组的元素进行排序，并返回数组。 sort 排序不一定是稳定的。默认排序顺序是根据字符串 Unicode 码点。
  filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
  arr.filter(function(ele){
  return ele>4;
  })

  forEach() 方法对数组的每个元素执行一次提供的函数。
  find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
  findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
  map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
  reduce() 方法对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值。

- 数组方法测试地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array

- Math 随机数
  Math.floor() 返回小于 x 的最大整数。
  Math.round() 返回四舍五入后的整数.
  Math.random() 返回 0 到 1 之间的伪随机数.
  Math.ceil() 返回 x 向上取整后的值.

- 随机获取 [max~min) 之间的随机数
  parseInt(Math.random()_(max-min+1)+min,10);
  Math.floor(Math.random()_(max-min+1)+min);

********\*\*********\*********\*\*********2018.7.10 （移动端布局）********\*\*********\*\*\*\*********\*\*********

- <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

- 动态设置 根目录的字号 定义 1rem 的大小 6.4 代表设计图的尺寸/100

  假如你的设计图是 640 的，在设计稿中量出来的尺寸/100 就是这个元素的 rem 的值

  document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';

  使用 rem 布局 有些行元素设置了 font-size 之后就会变得很大 使用 display:block 解决

  rem 根目录的字号 html

\*（淘宝无限适配）手机端 rem 布局详解（转载非原创）https://www.cnblogs.com/well-nice/p/5509589.html

********\*\*********\*********\*\*********2018.7.9 （jQuery 扇窗效果动画）********\*\*********\*\*\*\*********\*\*********

- $('.pic').width() //获取宽度
  $('.pic').height() //获取高度
  $('.pic img').length //获取 img 标签的个数
  $(this).index() //获取当前的索引值

********\*\*********\*********\*\*********2018.7.7 （IE 浏览器兼容问题）********\*\*********\*\*\*\*********\*\*********

- IE6bug 汇总
   双边距：一个 div 盒子如果设置了 margin，并且该 div 设置了 float 浮动，那么在 IE6 下便会产生双边距问题：如果设置 float:left 那么左边距会是原来 margin 的两倍；如果是 float:right，那么右边距会是原来 margin 的两倍。 解决办法：\_display: inline

  3 像素：3 像素 bug 是 IE6 的一个著名的 bug，当浮动元素与非浮动元素相邻时，这个 3 像素的 Bug 就会 出现。 在浮动元素上加上\_margin-right:-3px;

   微型高度这个 BUG 的产生原因很简单，IE 不允许元件的高度小于字体的高度，所以，下面的 fix 是设置上字体大小。解决方案一{font-size:0px;} 解决方案二{overflow:hidden;}(最佳)

   绝对定位：在 IE6 下面 position:absolute 的绝对定位层前面紧邻的那个层如果有用到“float” css 浮动属性会导致这个绝对定位层无法显示解决办法就是在这个绝对定位浮动层前面插入一个清除浮动的层（或者空 div）

- Png 透明：img 和 background 都有不同的解决办法但是不能同时兼容因此引入一个 js 来解决，

  !–[if IE 6]>

     <script type=”text/javascript” src=”js/DD_belatedPNG_0.0.8a-min01.js”></script>
     <script type=”text/javascript”>
       DD_belatedPNG.fix(‘选择器名称  , 应用类型（属性名称或者是元素名称）’);
     </script>

  <![endif]–>

- IE6 不识别最大最小宽高的问题。

  max-width:1000px;
  \_width:expression((document.documentElement.clientWidth||document.body.clientWidth)<1000?"1000px":"");
  overflow:hidden;

  min-width:1000px;
  \_width:expression((document.documentElement.clientWidth||document.body.clientWidth)>1000?"1 000px":"");

  max-width:620px;
  min-width:1px;
  \_width:expression(this.scrollWidth > 620 ? "620px":(this.scrollWidth < 1? "1px":"auto"));

  max-height:1000px;
  \_height:expression((document.documentElement.clientHeight||document.body.clientHeight)<1000?" 1000px":"");
  overflow:hidden;

  min-height:1000px;
  \_height:expression((document.documentElement.clientHeight||document.body.clientHeight)>1000?" 1000px":"");

  Max-Height:620px;
  Min-Height:40px;
  \_height:expression(this.scrollHeight > 620 ? "620px":(this.scrollHeight < 40 ? "40px":"auto"));

* H5 标签 ie8 不识别问题
  1.css：article,aside,dialog,footer,header,section,footer,nav,figure,menu{display:block;}

  2.Head 下面添加：

  <!--[if lt IE 9]>
  <script>
  (function() {
  if (!
  /_@cc_on!@_/ 0) return;
  var e = "abbr, article, aside, audio, canvas, datalist, details, dialog, eventsource, figure, footer, header, hgroup, mark, menu, meter, nav, output, progress, section, time, video".split(', ');
  var i= e.length;
  while (i--){
  document.createElement(e[i])
  }
  })()
  </script>
  <![endif]-->

  js 代码下载地址：http://www.dillerdesign.com/experiment/DD_belatedPNG/

  DD_belatedPNG.fix('\*');

  用函数是 DD_belatedPNG.fix() , 括号里分别填写应用 PNG-24 的 CSS 选择器（可使用 ID 选择器和类选择器）和应用类型（分为 img 标签和 background 属性两种）。如 ：

    <script type="text/javascript">
      DD_belatedPNG.fix('#box, img');
    </script>

  或者

    <script type="text/javascript">
      DD_belatedPNG.fix('.header, background');
    </script>

  也可以简写成

    <script type="text/javascript">
      DD_belatedPNG.fix('#box-one, .header, img, background');
    </script>

  或者像本例子中直接使用 \* 号，表示应用所有 css 选择器及 xhtml 标签。

    <script type="text/javascript">
      DD_belatedPNG.fix('*');
    </script>

  IE6 双边距 解决方法：\_display:inline

  - 微型高度：IE 不允许元素的高度小于字体的的高度 解决方案：font-size:0px; 或 overflow:hidden;


    //选择器前缀

    “*html ”*前缀只对IE6生效

    “*+html ”   *+前缀只对IE7生效

    @media screen\9{...}只对IE6/7生效

    @media \0screen {body { background: red; }}只对IE8有效

    @media \0screen\,screen\9{body { background: blue; }}只对IE6/7/8有效

    @media screen\0 {body { background: green; }} 只对IE8/9/10有效

    @media screen and (min-width:0\0) {body { background: gray; }} 只对IE9/10有效

    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {body      { background: orange; }}

    只对IE10 IE11有效等等


    //属性前缀
     _background-color: orange;/*6.7*/
    background-color: red\0;/*pink8*/
    background-color: yellow\9\0; /*8*/
    *background-color: green;/*6*/
    background-color: green !important;  //提升优先级

    .body{  background:red\0/;} ,只在IE8显示
    .body{  background:red\9;} ,只在IE6、7、8、9显示
    .body{  background:red\0;} ,只在IE8、9、10显示
    .body{  background:red\9\0;} ,只在IE9、10显示
    .body{  *background:red;} ,只在IE6、7显示
    .body{  _background:red;} ,只在IE6显示




    CSS hack主要有三种：IE条件注释法、CSS属性前缀法、选择器前缀法。

    <!--  lt是小于 gt是大于 lte是小于等于 gte是不小于 !是不等于 -->

    <!--[if IE]>
        你想要执行的代码
    <![endif]-->

    <!--[if lt IE 8]>
        你想要执行的代码
    <![endif]-->

    <!--[if ! IE 8]>
        你想要执行的代码
    <![endif]-->

    例如：<!--[if ! IE 8]>
            <link rel="stylesheet" href="iehack.css" />
          <![endif]-->

******\*\*\*\*******\*******\*\*\*\*******2018.7.5 （jQuery 选择器）******\*\*\*\*******\*\*\*\*******\*\*\*\*******

- $('选择器').each(function(){每查找到一个元素的时候，就执行}) 相当于循环

- jq 所有修改样式的方法只要是 px 单位均可省略

  append() //最后插入元素
  prepend() //最前边插入元素
  html() //插入所有内容
  text() //插入文本
  each(index,data) //遍历数组

  案例：

        <div>
            <p id="1">1</p>
            <p id="2">2</p>
            <p id="3">3</p>
        </div>

        $("#2").next();//这个获取的等同于$("#3")
        $("#2").prev();//这个获取的等同于$("#1")
        $("#2").siblings();//这个获取的等同于$("#1,#3")

********\*\*********\*********\*\*********2018.7.3 （jQuery）********\*\*********\*\*\*\*********\*\*********

- jQuery 动画 - animate() 方法

  - $(selector).animate({params},speed,callback);

  - 必需的 params 参数定义形成动画的 CSS 属性。

  - 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

  - 可选的 callback 参数是动画完成后所执行的函数名称。

- mouseover 事件与 mouseout 事件的区别 mouseenter 事件与 mouseleave 事件的区别

  1.不论鼠标指针穿过被选元素或其子元素，都会触发 mouseover 事件。对应 mouseout

  2.只有在鼠标指针穿过被选元素时，才会触发 mouseenter 事件。对应 mouseleave

  3.这样的话，mouseenter 子元素不会反复触发事件，否则在 IE 中经常有闪烁情况发生。

- 获取焦点 $('article textarea').focus(function(){ //事件处理 })

```
    $('article textarea').focus(function(){
      // $(this).attr('placeholder','')
      // 其实还可以直接删除 placeholder 属性    removeAttr('属性名') 删除某个属性
      $(this).removeAttr('placeholder')
    })
```

- 当元素失去焦点时发生 blur 事件。$('article textarea').blur(function(){ //事件处理 })

- 删除属性 $(this).removeAttr('placeholder')

- $('标签') 生成新的标签

- .text() 例子:给 title 内添加了文字内容

- a.append(b) 向 a 中添加一个子级 b，位置是最后一个

********\*\*********\*********\*\*********2018.7.2 （jQuery）********\*\*********\*\*\*\*********\*\*********

- 说明：html 结构 + css 表现 + js 行为

- jQuery 引入方式有两种： 1.下载到本地 引入 <script src="js/jquery-3.3.1.min.js"></script> 2.使用 cdn 引入 <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
-

* jQuery 选择器

  - 阻止 a 的默认跳转： event.preventDefault()

  - 添加和删除类方法：addClass() removeClass()

  - 添加和修改 css 样式：.css('background-color','red')

  - 查找类方法： .parent('选择器') 父级 .siblings('选择器') 其他兄弟 .find('选择器') 括号内必须填 查找后代 .eq(索引值) 第几个

  - 获取索引值：.index() 可以先看选择器的父级 再看这个选到的在父级中处于第几个 从 0 开始

********\*\*********\*********\*\*********2018.7.1********\*\*********\*\*\*\*********\*\*********

- 背景渐变
  background:linear-gradient(#000,#fff);

- 直角三角形
  border-top: 40px solid #000;
  border-left: 40px solid transparent;

- ctrl+{ 选中文字缩进

********\*\*********\*********\*\*********2018.6.30********\*\*********\*\*\*\*********\*\*********

- border:1px double #fff;

- <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>

- 清除浮动

```
    .clearfix:after {
        display: block;
        clear: both;
        content: "";
        visibility: hidden;
        height: 0;
    }
    .clearfix {
        zoom: 1;
    }
```

- 媒体查询
  @media screen and (max-width:100px){
  body{

  <!-- 样式 -->

  }
  }

- 媒体查询案例：

```
    @media screen and (max-width: 1200px) and (min-width: 992px){
      body{background-color: #000;}
    }
    @media screen and (max-width: 992px) and (min-width: 768px){
      body{background-color: blue;}
    }
    @media screen and (max-width: 768px){
      body{background-color: red;}
    }
```

********\*\*********\*********\*\*********2018.6.29********\*\*********\*\*\*\*********\*\*********

```
/*animation: 动画名称  一次效果的持续时间  速度曲线  延迟  播放次数  偶数次是否逆向播放 是否停到最后一帧;*/
/*css3 动画*/
    /*定义一个动画*/
    /*动画的开始到结束跟原来的样式基本上没关系*/
    /*动画结束后默认回到原来的位置*/
    /*@keyframes jump {
      0%{transform:translateY(-50px);opacity: 1;}
      50%{transform:translateY(-60px);opacity: 0.5;}
      100%{transform:translateY(-100px);opacity: 1;}
    }*/
```

********\*\*********\*********\*\*********2018.6.28********\*\*********\*\*\*\*********\*\*********

- 引入字体
  @font-face{
  font-family: myFirstFont;
  src: url('fonts/Vera-webfont.eot'),
  url('fonts/Vera-webfont.svg'),
  url(fonts/Vera-webfont.ttf),
  url(fonts/Vera-webfont.woff);
  }

```
  /*background-position: center center;*/
  /*背景图大小*/
  /*-webkit- 谷歌和苹果 浏览器厂商前缀 */
  /*-o- 欧鹏*/
  /*-moz- 火狐*/
  /*-ms- ie*/
  /*background-size: 100px(宽度  单位为% 相对于盒子宽度来说) 100px(高度 单位为% 相对于盒子高度来说);*/
  /*-webkit-background-size: 50% 10%;*/
  /*background-size: 100px(宽度 单位为% 相对于盒子宽度来说 高度自适应) / contain / cover ;*/
  /*background-size: cover;*/
  /*规定背景图的开始位置  content-box  padding-box  border-box*/
  /*-webkit-background-origin: border-box;
  background-origin: border-box;
  background-clip: content-box;*/

  /*box-shadow:水平(必须) 垂直(必须) 模糊距离 阴影尺寸 颜色 位置inset ;*/
```

- 字母不换行

```
    letter-spacing:2px ;/*字母间距*/

    /*word-spacing:20px;*//*单词间距*/

    /*word-break: break-all;*/ /*打破单词*/

            /*超出部分显示三个点*/
            /*1.必有有定宽*/
            /*2.强制不换行*/
            /*3.超出部分隐藏*/
            /*4.超出部分文字显示三个点*/
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
```

- 动画旋转 过度

```
            /*转换 ： 位移(translate(水平,垂直))  缩放  旋转  拉伸*/
            /*transform: translate(200px,100px);  水平移动 200px  垂直移动 100px*/
            /*盒子原来的位置不会变化，只是内容移动，并不会影响其他盒子，还有可能覆盖其他盒子*/
            /*transform: scale(1,2) 宽度放大一倍 高度放大2倍 默认放大圆心是盒子中心点*/
            /*transform: scale(0.5);*/
            /*transform: rotate(45deg);*/
            /*转换的组合变化*/
            transform: translate(0px,0) rotate(90deg) scale(0.5,1) ;
            /*使用 transform-origin 改变 transform 的中心点*/



            /*使用 transform-origin 改变 transform 的中心点  transform-origin: center(水平) bottom(垂直);  */
            /*transform-origin: center bottom; */
            /*transform: rotate(90deg);*/


            /*transition: 样式名(all 代表所有改变的样式)  时间  速度曲线(linear(匀速） ease(默认 慢-快-慢)  ease-in(慢-快)  ease-out(快-慢)) 延时*/
            /*transition 会监听该元素的样式变化 只要变化的样式名符合 就会把这个变化的过程展现出来*/
```

********\*\*********\*********\*\*********2018.6.24********\*\*********\*\*\*\*********\*\*********

### 2018.6.24

- 选择器：标签选择器 1 类名选择器 10 id 选择器 100 后代选择器(空格) 伪类选择器(:nth-child())
  - 选择器权重值 权重值大的生效
- background-color: rgba(14,14,14,0.5);
- background-color: #000;
- 边框线形 solid 实线 dashed 虚线 dotted 点线
- border: 1px dotted red;
- text-indent: -9999px;
- margin-top 解析到父级身上 解决方案: 1.加 border 2.使用父级的内边距替代 3.浮动
- 100-900 数字 lighter bold bolder normal 案例：font-weight: normal;
- font-style: italic; 或 i 标签 （斜体）
- 下划线 none line-through underline 例子：text-decoration: none;
- a:nth-child(n)用法 先找 a 的父级，然后看 a 在父级中属于第几个孩子 括号内添几

  - html 语法 标签:通常由开始和结束组成
  - 有的标签自带边距或其他样式 通常作页面的时候，先做标签初始化
  - 结构
  - 页面重构

  - 大 logo 一般使用最大的标题标签 h1 把 logo 图片当作 h1 的背景图片
  - 标题 h1-h6 页面中只有一个 h1-->
  - 大部分元素(块元素)都是竖向排列的，因为这些元素独立成行 可以使用 float 修改
  - 块元素(header div h1 footer section) 行元素(a span strong i b) 行级块元素(img)
  - 块：独立成行 可以设置大小 行：不独立成行，不可以设置大小 行级块:可以设置大小，不独立成行
  - a 标签自带下划线和颜色 想要修改 a 的颜色的话必须接直接选中才能修改
  - 定位 相对定位(参照物必须是祖先) 固定定位
  - 相对定位:参照物 position:relative; 本身 position:absolute; 使用 top left right bottom 改变位置

********\*\*********\*********\*\*********2018.6.23********\*\*********\*\*\*\*********\*\*********

### 2018.6.23

- background-size 属性规定背景图片的尺寸。
- background-origin 属性规定背景图片的定位区域。
- background-clip 背景绘制区域
  - center-box
  - padding-box
  - border-box
- border-color: transparent; 颜色透明

- 引入字体，将字体导入到本地

````@font-face{
     font-family:haha;
     src:url('font/BebasNeue-webfont.eot'),
         url('font/BebasNeue-webfont.svg'),
         url('font/BebasNeue-webfont.ttf'),
         url('font/BebasNeue-webfont.woff');
   }
   .fonts{
       font-family:haha;
       font-size:18px;
   } ```

页面重构

选择器权重：标签元素1  类名选择器10  id选择器100



### 页面一般框架

* header（导航，logo，搜索，banner:广告条）  +  main  + footer(合作伙伴)
````
