/**
 * SwitchMap emite Observable y
 * A diferencia del mergeMap, cuando el source$ emite un valor, si ya habia emitido otro anterior; 
 * el switchMap completa la emision anterior, en pocas palabras solo emite el ultimo valor generado
 * por el source$
 * 
 * 
 * Solo mantiene un subscripcion activa mientras que el mergeMap mantiene todas las que yo quiera activas
 */