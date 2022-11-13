import Booking from "../models/Booking.js"

export const createBooking = async (req,res,next)=>{
    const newBooking = new Booking(req.body)

    try{
        const savedBooking = await newBooking.save()
        res.status(200).json(savedBooking)
    }catch(err){
        next(err);
    }
}
export const getBooking =  async (req,res,next)=>{
    try {
        const booking= await Booking.findById(req.params.id);
        res.status(200).json(booking);
      } catch (err) {
        next(err);
      }
}

export const deleteBooking = async(req,res,next)=>{
    try {
      await Booking.findByIdAndDelete(req.params.id);
      res.status(200).json("Hotel has been deleted.");
    } catch (err) {
      next(err);
    }
}


export const getBookings = async(req,res,next)=>{
    try{
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    }
    catch{
        res.status(500).json(err);
    }
}





