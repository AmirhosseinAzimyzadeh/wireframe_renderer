import { assertEquals } from 'https://deno.land/std@0.116.0/testing/asserts.ts';
import Point from './Point.ts';

Deno.test('Point "Equality"' ,() => {
  const p1 = new Point(12, 3, 4);
  const p2 = new Point(12, 3, 4);

  assertEquals(p1.isEqual(p2),true);
  assertEquals(p1.isEqual(new Point(0, 0, 0)),false);
});

Deno.test('Point "asArray"', () => {
  const p1 = new Point(12, 3, 4);
  
  assertEquals(p1.asArray(), [12, 3, 4])
});

Deno.test('Point "change callback"', () => {
  const p = new Point(0, 0, 0);
  let hasChanged = false;
  const changeCB = () => { hasChanged = true; }
  p.setChangeCallback(changeCB);

  p.x = 12;
  assertEquals(hasChanged, true);
});