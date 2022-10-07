import {Controller, Delete, Get, Patch, Post, Put} from '@nestjs/common';


@Controller('premier')
export class PremierController {
    @Get('/')
    getRoute(): string {
        return "this is a get request";
    }

    @Post('/')
    postRoute(): string{
        return "this is a post request"
    }
    @Delete('/')
    deleteRoute(): string{
        return "this is a delete request"
    }
    @Put('/')
    putRoute(): string{
        return "this is a put request"
    }
    @Patch('/')
    patchRoute(): string{
        return "this is a patch request"
    }
}

