import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection} from 'firebase/firestore';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  
  getExercises(): Observable<any[]>{
    const exercisesCollection = collection(this.firestore, 'exercises')
    return collectionData(exercisesCollection, {idField: 'id'})
    .pipe(map(exercises => exercises as any[]))
  }
}


