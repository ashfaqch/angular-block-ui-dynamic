# Angular Block-UI Dynamic

## Install

```bash
npm install angular-block-ui-dynamic --save
```

## Quick start

**Import module `AngularBlockUiDynamicModule` in your application root @NgModule**

```typescript
import { AngularBlockUiDynamicModule } from 'angular-block-ui-dynamic';

@NgModule({
    declarations: [
    AppComponent
 ],
    imports: [
    BrowserModule,
    AngularBlockUiDynamicModule /* <--- */
 ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

**Use in your html template to display block UI**

```html
    <block-ui-dynamic [visible]='true Or false'>Please wait...</block-ui-dynamic>
```

## Demo

https://stackblitz.com/github/ashfaqch/angular-block-ui-dynamic-demo
