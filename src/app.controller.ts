import { Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UseInterceptors(FilesInterceptor('image'))
  uploadfile(@UploadedFile() file){
  console.log(file);
  
  }

 /* @Get(':imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res()res){
   return res.sendFile(image , {root:'uploads'});
  }*/
}
