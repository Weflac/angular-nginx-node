### 一、关于路由的总结
* 1、在`app`文件夹下创建一个单独的文件写路由配置(`app.router.ts`)

    ```javascript
    import {Routes} from '@angular/router';
    import {HomeComponent} from './home/home.component';
    import {AboutComponent} from './about/about.component';
    import {ContactComponent} from './contact/contact.component';
    
    
    export const rootRouterConfig: Routes = [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent}
    ];
    ```
    
* 2、在`app`文件夹下的`app.module.ts`添加创建的路由
    
    ```javascript
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(rootRouterConfig, {useHash: true}),//兼容老版本浏览器的HashLocationStrategy
        //RouterModule.forRoot(rootRouterConfig) 这个是angular中默认的路由策略,使用pathLocationStrategy
    ],
    ```
    
* 3、配置`router-outlet`插座来装载展示的路由文件
* 4、使用`[routerLink]="['xxx']"`进行路由跳转(`xxx`就在路由文件中配置的`path`)

    ```html
    <div class="row">
        <div class="col-md-3">
            <ul class="list-group">
                <li class="list-group-item"><a [routerLink]="['home']" routerLinkActive="active">home</a></li>
                <li class="list-group-item"><a [routerLink]="['about']" routerLinkActive="active">about</a></li>
                <li class="list-group-item"><a [routerLink]="['contact']" routerLinkActive="active">contact</a></li>
            </ul>
        </div>
        <div class="col-md-9">
            <router-outlet></router-outlet>
        </div>
    </div>
    ```
* 5、使用`routerLinkActive="className"`来显示当前选择的路由样式

### 二、关于在`ts`文件中操作路由的切换的方式
* 1、使用`navigate`进行跳转

    ```javascript
    ...
    constructor(private router: Router) { }
    
    ngOnInit() {
    }
    page1(){
        this.router.navigate(['/about']);
    }
    ...
    ```
    
* 2、使用`navigateByUrl`进行跳转

    ```javascript
    ....
    constructor(private router: Router) { }
    page2(){
        this.router.navigateByUrl('about');
    }
    ....
    ```

### 三、关于路由中传递的参数(`path`)方式
* 1、在路由中定义存放参数的位置

    ```javascript
    export const rootRouterConfig: Routes = [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'about/:id', component: AboutComponent},
      {path: 'contact/:id1/:id2', component: ContactComponent}
    ];
    ```
    
* 2、在页面跳转`[routerLink]`中传递参数

    ```html
    <ul class="list-group">
        <li class="list-group-item"><a [routerLink]="['home']" routerLinkActive="active">home</a></li>
        <li class="list-group-item"><a [routerLink]="['about',1]" routerLinkActive="active">about</a></li>
        <li class="list-group-item"><a [routerLink]="['contact',1,2]" routerLinkActive="active">contact</a></li>
    </ul>
    ```
    
* 3、运行效果

    ![2017-07-17_101735.png](C:/Users/lwx448004/Desktop/2017-07-17_101735.png "")

* 4、获取到`[routerLink]`传递的参数(使用`ActivatedRoute`)

    ```javascript
    export class ContactComponent implements OnInit {
      constructor(private route: ActivatedRoute) {
        route.params.subscribe(params => {
          console.log(params);
          //获取到的传递过来的id可以进行下一步操作
        });
      }
    
      ngOnInit() {
      }
    
    }
    ```
    
### 九、关于`query`传递参数的获取

* 1、直接在页面的`[routerLink]="['xx']"`后面加上`[queryParams]=""`

    ```html
    <li class="list-group-item"><a [routerLink]="['about']" [queryParams]="{id:1,name:'hello',age:20}" routerLinkActive="active">about</a></li>
    ```
    
* 2、在`ts`文件中获取参数

    ```javascript
    constructor(private route: ActivatedRoute) {
        route.queryParams.subscribe((queryParams) => {
          console.log(queryParams);
        });
    }
    ```
* 3、运行效果

    ![2017-07-17_124016.png](C:/Users/lwx448004/Desktop/2017-07-17_124016.png "")

### 十、关于`ts`中点击跳转传递参数

* 1、使用`navigate`进行传递`path`参数

    ```javascript
    constructor(private router: Router) { }
    page3(){
        this.router.navigate(['/contact', 10, 20]);
    }
    ```
    
* 2、使用`navigateByUrl`进行传递path参数

    ```javascript
    constructor(private router: Router) { }
    page4(){
        this.router.navigateByUrl('contact/20/30');
    }
    ```
    
* 3、使用`navigate`传递`query`参数

    ```javascript
    constructor(private router: Router) { }
    page1(){
        this.router.navigate(['/about'], {queryParams: { 'id': '10', 'name': 'word', 'age': '30'}});
      }
    ```
    
* 4、使用`navigateByUrl`传递`query`参数

    ```javascript
    constructor(private router: Router) { }
    page2(){
        this.router.navigateByUrl('about?id=10&name=hello&age=20');
    }
    ```
    