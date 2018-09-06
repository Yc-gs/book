/**
 * Created by Administrator on 2018/9/6.
 */
import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
  providers: [ProductRepository, StaticDataSource]
})
export class ModelModule { }
