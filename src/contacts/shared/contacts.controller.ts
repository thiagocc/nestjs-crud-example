import { Contact } from '../contact.entity';
import { ContactsService } from './contacts.service';
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('contacts')
export class ContactsController {

    constructor(private contactsService: ContactsService) { }

    @Get()
    async index(): Promise<Contact[]> {
        return this.contactsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Contact> {
        return this.contactsService.findOne(id);
    }

    @Post()
    async create(@Body() contactData: Contact): Promise<any> {
        return this.contactsService.create(contactData);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() contactData: Contact): Promise<any> {
        contactData.id = Number(id);
        console.log('Update #' + contactData.id)
        return this.contactsService.update(contactData);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
        return this.contactsService.delete(id);
    }
}
