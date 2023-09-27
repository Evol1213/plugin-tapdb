require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name = 'PluginTapdb'
  s.version = package['version']
  s.summary = package['description']
  s.license = package['license']
  s.homepage = package['repository']['url']
  s.author = package['author']
  s.source = { :git => package['repository']['url'], :tag => s.version.to_s }
  s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
  s.ios.deployment_target  = '13.0'
  s.dependency 'Capacitor'
  s.swift_version = '5.1'
  s.frameworks = [
    'AdSupport',
    'AdServices',
    'AppTrackingTransparency',
    'SystemConfiguration',
    'CoreMotion',
    'CoreTelephony',
    'Security'
  ]
  s.vendored_frameworks = 'ios/Pods/TapDB.framework'
  s.xcconfig = { 'OTHER_LDFLAGS' => '-lz -lc++ -lresolv -lsqlite3.0 -ObjC' }
  s.libraries = 'c++','resolv','z','sqlite3.0'
end
