// src/mongo-connection.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import mongoose from 'mongoose';

@Injectable()
export class MongoConnectionService implements OnModuleInit {
    onModuleInit() {
        mongoose.connection.on('connected', () => {
        console.log('✅ Conexión a MongoDB establecida correctamente.');
        });

        mongoose.connection.on('error', (err) => {
        console.error('❌ Error al conectar a MongoDB:', err);
        });

        mongoose.connection.on('disconnected', () => {
        console.warn('⚠️ Se perdió la conexión con MongoDB.');
        });
    }
}
