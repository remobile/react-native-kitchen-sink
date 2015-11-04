//
//  DesModule.m
//  AwesomeProject
//
//  Created by fangyunjiang on 15/10/21.
//  Copyright (c) 2015年 Facebook. All rights reserved.
//

#import "DesModule.h"
#import "DesBase64.h"

@implementation DesModule
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(encrypt:(NSString *)data key:(NSString *)key callback:(RCTResponseSenderBlock)callback) {
  NSString *base64 = [DesBase64 encryptUseDES:data key:key];
  callback(@[base64]);
}

RCT_EXPORT_METHOD(decrypt:(NSString *)base64 key:(NSString *)key callback:(RCTResponseSenderBlock)callback) {
  NSString *data = [DesBase64 decryptUseDES:base64 key:key];
  callback(@[data]);
  
}

@end
