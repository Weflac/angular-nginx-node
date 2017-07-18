>在我们本地开发`angular`项目一般是利用官方提供的`angular-cli`创建一个项目雏形,默认启动的端口是4200,在项目开发中要涉及到调用别的后端(`java`,`php`,`python`,`node`)服务的数据接口,这时候会出现跨域的问题

### 一、在实际项目开发中解决跨域的问题参考[angular2解决跨域](http://blog.csdn.net/kuangshp128/article/details/71909331)

### 二、当项目部署的时候我们使用`nginx`解决出现跨域的问题

* 1、在本地搭建了一个`node`服务返回json数据

    ```javascript
    router.get("/albumlist",(req,res)=>{
        db("select * from file",(err,data)=>{
            if(data){
                res.json({
                    'data':data,
                    'code':1,
                    'info':'success'
                })
            }
        })
    })
    ```
* 2、`nginx`的配置文件添加代理

    ```
    location /albumlist  {  
        #每有一个新的代理需求，就新增一个location
        #反向代理，达到前后端分离开发的目的
    	rewrite  ^/albumlist/(.*)$ /$1 break;
        proxy_pass http://localhost:3000;
    }
    ```
    
### 三、案例跑起来步骤
* 1、下载好`angular`项目和`node`项目和`nginx`软件
* 2、根据提供的`sql`文件创建一个数据库`nodetest`下创建表
* 3、进行`npm install`包的安装
* 4、跑起`ng`和`node`项目
* 5、项目跑起来没问题，在`ng`项目中运行`ng build`进行打包
* 6、把`dist`里面的文件全部复制到`nginx`的`html`文件夹下
* 7、修改`nginx`的配置文件
* 8、运行`nginx`