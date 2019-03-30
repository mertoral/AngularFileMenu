import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { Tabs, Tab } from './tabs/Tabs.Component';

@NgModule({
    imports: [AppModule, ServerModule, ModuleMapLoaderModule,Tab, Tabs],
    bootstrap: [AppComponent]
})
export class AppServerModule { }
