# Food truck App 🧄🚚λ⚛️

<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="./server.png" alt="server logo"></a>
</p>

Application focused on the backend , using express and typescript.
Mongodb as database and using NEXT JS for servers side rendering the UI.

This is just production application for own case, nothing that will be in production. That's why some error messages that I handle is there for a special purpose. Just to understand the code on what's going on. I know that in a real case you would have write in a more a anonymous way. 🧛‍♂️

## App

is just the backend server , with all different end points end middleware

## App2.0

Is the same but built with a custom server together with Next JS.

### Tools 🛠

* Node JS 🥝
* Typescript λ
* React ⚛️
* Next js 💥
* Express 🚝
* Mongoose 🐨
* Mongo DB ᠣ
* jsonwebtoken 🗼
* bcryptjs ⳮ
* Styled-components 💅🏻

## Endpoints 🅰🅿🅸

**USERS** 👩🏻‍💻

``` ts
/**
 * @method --- POST
 * @access --- Public
 * @route --- user/register
 * @desc --- register new user
 */

export const registerUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const newUser = await User.create(req.body);

    // Create new Token
    let token = await newUser.generateAuthToken();

    res
      .status(201)
      .json({ success: true, msg: "User Registered!", data: newUser, token });
  },
);

/**
 * @method --- GET
 * @desc --- get user profile
 * @access --- Private
 * @route --- user/me
 */

export const getMe = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const user = await User.findById(req.user._id).select("-password -tokens");
    res.status(200).json({ success: true, msg: "Get me", data: user });
  },
);

/**
 * @method --- PUT
 * @desc --- update user profile
 * @access --- Private
 * @route --- user/me/update
 */

export const updateMe = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    let user = await User.findById(req.user._id);

    if (!user) {
      return next(new ErrorResponse("User not found", 404));
    }

    user = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(201).json({
      success: true,
      msg: `${user?.firstName} got updated!` ,
      data: user,
    });
  },
);

/**
 * @method --- Delete
 * @desc --- remove user profile
 * @access --- Private
 * @route --- user/me/remove
 */

export const removeMe = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    let user = await User.findById(req.user._id);

    if (!user) {
      return next(new ErrorResponse("User not found", 404));
    }

    await User.findByIdAndRemove(req.user._id);

    res
      .status(200)
      .json({ success: true, msg: `${user.firstName} got removed` , data: {} });
  },
);
```
