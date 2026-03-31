// import { Request, Response } from 'express';
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// export const getBooks = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const page = Math.max(1, parseInt(req.query.page as string) || 1);
//     const limit = Math.max(1, parseInt(req.query.limit as string) || 12);
//     const skip = (page - 1) * limit;

//     const filter: Record<string, unknown> = {};

//     if (req.query.search) {
//       filter.title = { $regex: req.query.search as string, $options: 'i' };
//     }

//     if (req.query.genre) {
//       filter.genres = req.query.genre as string;
//     }

//     const [books, total] = await Promise.all([
//       prisma.books
//         .find(filter)
//         .skip(skip)
//         .limit(limit)
//         .select('title author genre published publisher lentgh'),
//       prisma.books.countDocuments(filter),
//     ]);

//     res.json({
//       page,
//       limit,
//       total,
//       totalPages: Math.ceil(total / limit),
//       books,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };
