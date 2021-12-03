import { assertEquals } from 'https://deno.land/std@0.116.0/testing/asserts.ts';
import Vector from './Vector.ts';

Deno.test('Vector Test "ZERO" #1', () => {
  const zeroVector = new Vector(0, 0, 0);
  assertEquals(0, zeroVector.size);
  assertEquals(0, zeroVector.unit.size);
});

Deno.test('Vector Test "Equality" #2', () => {
  const firstV = new Vector(12,324,44);
  const secondV = new Vector(12,324,44);
  assertEquals(firstV.isEqual(secondV), true);
  assertEquals(firstV.isEqual(new Vector(0,12,3)), false);
});

Deno.test('Vector Test "size and Unit"', () => {
  const vector = new Vector(0, 3, 4);
  assertEquals(5, vector.size);
  const unitVector = vector.unit;
  console.log({ unitVector });
  assertEquals(unitVector.isEqual(
    new Vector((0 / 5), (3 / 5), (4 / 5)),
  ), true);
});