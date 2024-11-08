import slugify from 'slugify';

export default function (x) {
  if (typeof x !== 'string') return x;
  return slugify(x, {
    lower: true,
  });
}
