#<p align="center"><font color="#0000dd">NPM 的安装及使用</font></p>

---

- ### npm 介绍

  ```
    NPM 是随同 NodeJS 一起安装的包管理工具，能解决 NodeJS 代码部署上的很多问题，常见的使用场景有以下几种：

    1.允许用户从 npm 服务器下载别人编写的第三方包到本地使用。

    2.允许用户从 npm 服务器下载并安装别人编写的命令行程序到本地使用。

    3.允许用户将自己编写的包或命令行程序上传到 npm 服务器供别人使用。
  ```

* ### npn 安装方式

  - #### 本地安装 npm

    将包安装在项目内的 node_modules 下，如果没有这个文件夹， npm 会自动创建。可以通过 require() 来引入项目内的包。

    ```
    npm install express --save # 版本名和版本号记录在 dependencies 字段
    ```

    ```
    npm install express --save-dev # 版本名和版本号记录在 devDependencies 字段
    ```

  - #### 全局安装 npm

    全局安装后可以直接在命令行里使用，不能在项目内引入。

    ```
    npm install gulp -g
    ```

    可以使用以下命令来查看所有全局安装的模块：

    ```
    npm ls -g
    ```

- ### npm 初始化

  创建模块，package.json 文件是必不可少的。我们可以使用 npm 生成 package.json 文件，生成的文件包含了基本的结果。

  ```
  npm init
  ```

  以上的信息，你需要根据你自己的情况输入。在最后输入 "yes" 后会生成 package.json 文件。同时在这个 json 文件中可以在 script 字段定义我们自己的一些脚本。

* ### 创建 npm 包

  ```
  npm install <Module Name>
  ```

  例如:

  ```
  npm install express --save
  ```

  这时，就会在我们的工程目录下生成一个 node_modules 的文件夹，在里边就会有 express 这个包了。如果想要用这个包，只需要在需要的地方 `require` 或者 `import` 一下就可以了。

- ### npm 常用命令

  - #### npm 卸载模块

        npm uninstall 模块名称

  - #### 更新模块

        npm update 模块名称

  - #### 搜索模块

        npm search 模块名称

  - #### 发布模块

        npm publish

    这里需要注意，发布模块的话需要在 npm 官网注册账号，并且执行下面的命令。

    ```
    npm adduser

    Username: demo

    Password:

    Email:(this is public) 1182567968@qq.com
    ```

  - #### 查看帮助

        npm help

  - #### 清空缓存
    可以清空 NPM 本地的缓存


        npm cache clear

- #### 撤销发布

  撤销发布的某个版本的模块

      npm unpublish @[版本号]

* ### 关于其他

  - #### npm 中文文档
    ```
    https://www.npmjs.com.cn/
    ```
  - #### npm 英文文档
    ```
    https://docs.npmjs.com/
    ```
