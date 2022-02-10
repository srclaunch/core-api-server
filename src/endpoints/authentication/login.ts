// import { UserPool } from 'cognito-srp';
import {
  AuthenticationMissingDeviceKeyException,
  AuthenticationMissingRefreshTokenException,
  CognitoMissingUserPoolIdException,
  MissingRequestBodyPropertyException,
} from '@srclaunch/exceptions';
import { getEnvironment } from '@srclaunch/node-environment';
import {
  AuthenticationDeviceDetails,
  AuthenticationTokens,
} from '@srclaunch/types';
// import Cookies from 'cookies';
import { Request, Response } from 'express';
// import { login, authenticateToken } from '../../lib/core/auth/cognito/login';
// import { refreshToken } from '../../lib/core/auth/cognito/tokens';
// import { getSigningKeys } from '../../lib/utils/crypto';
// import { AuthenticationInvalidRefreshTokenException } from '@srclaunch/exceptions';
// import { confirmDevice } from '../../lib/core/auth/cognito/devices';

// const { AWS_COGNITO_USER_POOL_ID } = process.env;
//
// if (!AWS_COGNITO_USER_POOL_ID)
//   throw new CognitoMissingUserPoolIdException(
//     'Missing "AWS_COGNITO_USER_POOL_ID" environment variable',
//     {
//       origin: {
//         file: 'lib/core/auth/cognito/login.ts',
//       },
//     },
//   );

export default {
  authenticateToken: async (req: Request, res: Response) => {
    /* : Promise<
    Response<{
      tokens: AuthenticationTokens;
    }>
  >*/
    try {
      // const { fingerprint } = req.body;
      // const keys = getSigningKeys();
      // const cookies = new Cookies(req, res, {
      //   keys,
      //   secure: getEnvironment().id !== 'dev',
      // });
      // const authHeader = req.headers.authorization;
      // const authHeaderRefreshToken =
      //   authHeader && authHeader.slice(6, authHeader.length);
      // const deviceKey = cookies.get('deviceKey');
      // const cookieRefreshToken = cookies.get('refreshToken');
      // const refreshToken = authHeaderRefreshToken ?? cookieRefreshToken;
      // console.log('deviceKey in auth with token', deviceKey);
      // if (!refreshToken) {
      //   throw new AuthenticationMissingRefreshTokenException(
      //     `Missing refresh token`,
      //     {},
      //   );
      // }
      // if (!deviceKey) {
      //   throw new AuthenticationMissingDeviceKeyException(
      //     `Missing device key`,
      //     {},
      //   );
      // }
      // const headersMap = Object.entries(req.headers).map(h => {
      //   return { headerName: h[0], headerValue: h[1]?.toString() ?? '' };
      // });
      // const fingerprintData = {
      //   deviceKey,
      //   encodedData: fingerprint,
      //   httpHeaders: headersMap,
      //   ipAddress:
      //     req.ip ??
      //     req.headers['x-forwarded-for']?.toString() ??
      //     req.socket.remoteAddress?.toString() ??
      //     '',
      //   serverName: 'localhost:8080',
      //   serverPath: '/core-api/auth/login',
      // };
      // const result = await authenticateToken({
      //   fingerprint: fingerprintData,
      //   refreshToken,
      // });
      // cookies.set('refreshToken', result.tokens.refreshToken, {
      //   domain: getEnvironment().id === 'dev' ? 'localhost' : 'budgetbloom.com',
      //   httpOnly: true,
      //   secure: getEnvironment().id !== 'dev',
      //   signed: true,
      // });
      // return res
      //   .set('Cache-Control', 'no-store')
      //   .set('Pragma', 'no-cache')
      //   .status(200)
      //   .json({
      //     tokens: result.tokens,
      //   });
    } catch (error: any) {
      switch (error.name) {
        case 'NotAuthorizedException':
          if (error.message === 'Invalid Refresh Token.') {
            // throw new AuthenticationInvalidRefreshTokenException(
            //   'Invalid refresh token',
            //   {
            //     cause: err,
            //     tags: {
            //       file: 'endpoints/core/authentication/login.ts',
            //     },
            //   },
            // );
          }

          break;
      }

      throw error;
    }
  },
  login: async (req: Request, res: Response) => {
    /*
    Promise<
    Response<{
      tokens: AuthenticationTokens;
    }>
  >*/
    // const { fingerprint, username, password } = req.body;
    // const keys = getSigningKeys();
    // const cookies = new Cookies(req, res, {
    //   keys,
    //   secure: getEnvironment().id !== 'dev',
    // });
    // const deviceKey = cookies.get('deviceKey');
    // if (!username) {
    //   throw new MissingRequestBodyPropertyException('username', {
    //     origin: {
    //       file: 'endpoints/authentication/login.ts',
    //       function: 'login()',
    //     },
    //     scope: 'Authentication',
    //   });
    // }
    // if (!password) {
    //   throw new MissingRequestBodyPropertyException('password', {
    //     origin: {
    //       file: 'endpoints/authentication/login.ts',
    //       function: 'login()',
    //     },
    //     scope: 'Authentication',
    //   });
    // }
    // const headersMap = Object.entries(req.headers).map(h => {
    //   return { headerName: h[0], headerValue: h[1]?.toString() ?? '' };
    // });
    // const fingerprintData = {
    //   deviceKey,
    //   encodedData: fingerprint,
    //   httpHeaders: headersMap,
    //   ipAddress:
    //     req.ip ??
    //     req.headers['x-forwarded-for']?.toString() ??
    //     req.socket.remoteAddress?.toString() ??
    //     '',
    //   serverName: 'localhost:8080',
    //   serverPath: '/core-api/auth/login',
    // };
    // const response = await login({
    //   username,
    //   password,
    //   fingerprint: fingerprintData,
    // });
    // if ('challenge' in response) {
    //   return res.send(200).json(response);
    // }
    // const { newDevice, tokens } = response;
    // cookies.set('idToken', tokens.idToken, {
    //   domain: getEnvironment().id === 'dev' ? 'localhost' : 'srclaunch.com',
    //   path: '/',
    //   expires: new Date(tokens.expiration),
    //   httpOnly: true,
    //   secure: getEnvironment().id !== 'dev',
    //   signed: true,
    // });
    // cookies.set('refreshToken', tokens.refreshToken, {
    //   domain: getEnvironment().id === 'dev' ? 'localhost' : 'srclaunch.com',
    //   path: '/',
    //   expires: new Date(tokens.expiration),
    //   httpOnly: true,
    //   secure: getEnvironment().id !== 'dev',
    //   signed: true,
    // });
    // if (newDevice && newDevice.key) {
    //   // const userPoolId = AWS_COGNITO_USER_POOL_ID.split('_')[1];
    //   // THIS DOESN'T WORK
    //   const userPoolId = '';
    //   console.log('userPoolId in adddevice', userPoolId);
    //   const userPool = new UserPool(userPoolId);
    //   const user = await userPool.createUser({ username, password });
    //   console.log('new device user auth with pw', user);
    //   const confirmDeviceResult = await confirmDevice({
    //     accessToken: tokens.accessToken,
    //     deviceKey: newDevice.key,
    //     passwordVerifier: user.verifier,
    //     salt: user.salt,
    //   });
    //   cookies.set('deviceKey', newDevice.key, {
    //     domain: getEnvironment().id === 'dev' ? 'localhost' : 'srclaunch.com',
    //     path: '/',
    //     expires: new Date(tokens.expiration),
    //     httpOnly: true,
    //     secure: getEnvironment().id !== 'dev',
    //     signed: true,
    //   });
    //   console.log('confirmDeviceResult', confirmDeviceResult);
    // }
    // return res
    //   .set('Cache-Control', 'no-store')
    //   .set('Pragma', 'no-cache')
    //   .status(200)
    //   .json({
    //     tokens,
    //   });
  },
  refreshAccessToken: async (req: Request, res: Response) => {
    /*
    : Promise<
    Response<{
      device?: AuthenticationDeviceDetails;
      tokens: AuthenticationTokens;
    }>
  > */
    // const keys = getSigningKeys();
    // const cookies = new Cookies(req, res, {
    //   keys,
    //   secure: getEnvironment().id !== 'dev',
    // });
    // const authHeader = req.headers.authorization;
    // const authHeaderRefreshToken =
    //   authHeader && authHeader.slice(6, authHeader.length);
    // const cookieRefreshToken = cookies.get('refreshToken');
    // const existingRefreshToken = authHeaderRefreshToken ?? cookieRefreshToken;
    // const deviceKey = cookies.get('deviceKey');
    // if (!existingRefreshToken) {
    //   throw new AuthenticationMissingRefreshTokenException(
    //     `Missing refresh token`,
    //     {},
    //   );
    // }
    // if (!deviceKey) {
    //   throw new AuthenticationMissingDeviceKeyException(
    //     `Missing device key`,
    //     {},
    //   );
    // }
    // const result = await refreshToken({
    //   deviceKey,
    //   refreshToken: existingRefreshToken,
    // });
    // console.log('refreshToken result', result);
    // const { tokens } = result;
    // cookies.set('refreshToken', tokens.refreshToken, {
    //   domain: getEnvironment().id === 'dev' ? 'localhost' : 'budgetbloom.com',
    //   httpOnly: true,
    //   secure: getEnvironment().id !== 'dev',
    //   signed: true,
    // });
    // return res
    //   .set('Cache-Control', 'no-store')
    //   .set('Pragma', 'no-cache')
    //   .status(200)
    //   .json({
    //     tokens,
    //   });
  },
};
