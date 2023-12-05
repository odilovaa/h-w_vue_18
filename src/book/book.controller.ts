import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Book } from './models/book.model';

@ApiTags('Books')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @ApiOperation({summary: 'Creating Book'})
  @ApiResponse({status: 200, description: 'Dates of new Book', type: Book})
  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @ApiOperation({summary: 'Finding all books'})
  @ApiResponse({status: 200, description: 'List of books', type: [Book]})
  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @ApiOperation({summary: 'Finding Book by id'})
  @ApiResponse({status: 200, description: 'Book', type: Book})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }

  @ApiOperation({summary: 'Updating Book'})
  @ApiResponse({status: 200, description: 'Updated Book', type: Book})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @ApiOperation({summary: 'Deleting Book by id'})
  @ApiResponse({status: 200, description: 'The book deleted or not', type: String})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
