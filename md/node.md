#<p align="center"><font color="#0000dd">Linux 之 Nodejs 的安装与配置</font></p>

---

- ### 什么是 Nodejs

> Nodejs 也是一个事件驱动 I/O 服务端 JavaScript 环境，基于 Google 的 V8 引擎，V8 引擎执行 Javascript 的速度非常快，性能非常好。在很多人的印象中，js 代码是不需要在诸如 Tomcat 之类的 web 服务器中运行的，事实上也确实如此，js 代码只要有一个浏览器就可以运行。安装 node 的方式很多，Windows 在这里就不讲了，在 Liunx 系统上以 nvm 按装 node 为例。

- ### 安装 nvm

  在命令行执行以下命令就可以安装 nvm 。

  ```
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
  ```

* ### 安装 nodejs

  在安装之前如想查看有哪些版本可以安装，即可执行如下命令：

  ```
   nvm ls-remote
  ```

  执行如下命令即可安装 nodejs ，另外，安装好 nodejs 后，不必再次安装 npm ，因为安装 nodejs 的同时 npm 也安装好了。

  ```
  nvm install 版本号　　　//例如：nvm install v5.10.1
  ```

  查看 nodejs 版本号

  ```
  node -v
  ```

  查看 npm 版本号

  ```
  npm -v
  ```

  如果是 windows 系统的话，可以直接到 [nodejs](https://nodejs.org/zh-cn/) 官网下载对应版本的软件，双击安装即可。

- ### 设置默认 nodejs 版本
  利用 nvm 可以在我们的机器上安装多个版本 node ，并且可以进行灵活的切换。下面将 5.10.1 这个 node 版本设置为默认。执行下面语句即可。重启 shell 之后，执行 `node -v` 可以查看当前的 node 版本。
  ```
  nvm alias default 5.10.1
  ```

* ### 配置 npm

  npm 是一个非常强大的包管理工具，可以让我们非常方便的安装、卸载、更新插件包，但是默认的 npm 下载包是从国外的服务器获取，速度很不给力，这里推荐使用淘宝镜像。推荐执行下面的命令，即使用淘宝定制的 cnpm 。执行一下命令就可以用 cnpm 这个命令了。

  ```
  npm install -g cnpm --registry=https://registry.npm.taobao.org
  ```

  检查是否已经装好可以执行命令：`cnpm -v`　之后装包的话可以直接 `cnpm install gulp` 进行安装。
